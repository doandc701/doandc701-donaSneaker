<?php
require_once('../utils/utility.php');

if(!empty($_POST)) {
	$action = getPost('action');
	$id = getPost('id');
	$num = getPost('num');

	$cart = [];
	if(isset($_COOKIE['cart'])) {
		$json = $_COOKIE['cart'];
		$cart = json_decode($json, true);
	}

	switch ($action) {
		case 'add':
			$isFind = false;
			for ($i=0; $i < count($cart); $i++) { 
                // nếu sản phẩm trùng thì cộng thêm số lượng
				if($cart[$i]['id'] == $id) {
					$cart[$i]['num'] += $num;
					$isFind = true;
					break;
				}
			}
            // nếu sản phẩm không có trong cart thì sẽ thêm mới sản phẩm đó vào 
			if(!$isFind) {
				$cart[] = [
					'id'=>$id,
					'num'=>$num
				];
			}
			setcookie('cart', json_encode($cart), time() + 5*24*60*60, '/');
			break;
		case 'delete':
			for ($i=0; $i < count($cart); $i++) { 
				if($cart[$i]['id'] == $id) {
					array_splice($cart, $i, 1);
					break;
				}
			}
			setcookie('cart', json_encode($cart), time() + 5*24*60*60, '/');
		break;
	}
}