<?php
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
defined('BASEPATH') OR exit('No direct script access allowed');

class ImagesCRUD extends CI_Controller{
    
    public $_statusOK = 200;
    public $_statusErr = 500;

    public $_OKmessage = 'Success';
    public $_Errmessage = 'Error';

    public $_table_column_array = ['user_id','title','description','img'];
    public $_table_column_edit = ['id','user_id','title','description','img'];
    public $required = ['user_id'];
    public $deleteRequired = ['id'];
    public function __construct(){
		parent ::__construct();
        $this->load->library('session');
        $this->load->library('json');
		$this->load->database();
        $this->load->helper('url');
        $this->load->model('Images_model');
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == "OPTIONS") {
            die();
        }
    }
    
    public function index()
	{
		echo('hello');
	}
    
    // get request
    public function getById(){
        
        $data = $this->check_array_values($_POST,$this->required);
        if(isset($data) && !empty($data)){
            echo $this->json->response($data,$this->_Errmessage,$this->_statusErr);
        }else{
            $result = $this->Images_model->getById($_POST['user_id']);
            if($result != null){
                echo $this->json->response($result,$this->_OKmessage,$this->_statusOK);
            }else{
                echo $this->json->response($this->db->error(),$this->_Errmessage,$this->_statusErr);
            }
        }
    }

 
    public function editList(){
        
        $data = $this->check_array_values($_POST,$this->_table_column_edit);
        if(isset($data) && !empty($data)){
            echo $this->json->response($data,$this->_Errmessage,$this->_statusErr);
        }else{
            $result = $this->Images_model->editList($_POST,$_POST['id']);
            
            if($result != null){
                echo $this->json->response($result,$this->_OKmessage,$this->_statusOK);
            }else{
                echo $this->json->response(['error'=>'something went wrong.'],$this->_Errmessage,$this->_statusErr);
            }
        }
    }


    public function check_array_values($array,$table_array){
        if(isset($array) && !empty($array)){
            $keys = [];
            foreach($array as $key => $value){
                array_push($keys,$key);
            }
            $data = array_diff($table_array,$keys);
            if(isset($data) && !empty($data)){
                $result = [ 
                    'Error_message' => "your post request mising some data.",
                    'Missing_data' => array_values($data)
                ];
                return $result;
            }else{
                return [];
            }
        }else{
            $result = [
                'Error_message' => "your post request is empty.",
                'Missing_data' => $table_array
            ];
            return $result;
        }
    }
      // post request
    public function save(){
        $data = $this->check_array_values($_POST,$this->_table_column_array);
        if(isset($data) && !empty($data)){
            echo $this->json->response($data,$this->_Errmessage,$this->_statusErr);
        }else{
            $result = $this->Images_model->saveList($_POST);
            if($result != null){
                $id = $this->db->insert_id();
                $data = $this->Images_model->getByIdValue($id);
                echo $this->json->response($data,$this->_OKmessage,$this->_statusOK);
            }else{
                echo $this->json->response(['error'=>'Something Went Wrong.'],$this->_Errmessage,$this->_statusErr);
            }
        }
    }

    public function deleteList(){
        $data = $this->check_array_values($_POST,$this->deleteRequired);
        if(isset($data) && !empty($data)){
            echo $this->json->response($data,$this->_Errmessage,$this->_statusErr);
        }else{
            $result = $this->Images_model->deleteList($_POST['id']);
            if($result != null){
                echo $this->json->response($result,$this->_OKmessage,$this->_statusOK);
            }else{
                echo $this->json->response(['error'=>'Something Went Wrong.'],$this->_Errmessage,$this->_statusErr);
            }
        }
    }

    public function upload_file(){
        $this->_table_column_array = ['img','type'];
        $data = $this->check_array_values($_POST,$this->_table_column_array);
        if(isset($data) && !empty($data)){
            echo $this->json->response($data,$this->_Errmessage,$this->_statusErr);
        }else{
            define('UPLOAD_DIR', 'uploads/');
            $img = $_POST['img'];
            $img = str_replace('data:image/'.$_POST['type'].';base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);
            $file = UPLOAD_DIR . uniqid() . '.'.$_POST['type'];
            $success = file_put_contents($file, $data);
            $data = $success ? $file : null;
            if($data != null){
                echo $this->json->response($data,$this->_OKmessage,$this->_statusOK);
            }else{
                echo $this->json->response(['message'=>'Something wrong with your base64.'],$this->_Errmessage,$this->_statusErr);
            }
        }
    }
 
}
