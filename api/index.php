<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	require_once('config.php');


	$subPath = str_replace('/index.php', '', $_SERVER['PHP_SELF']);
	$request = str_replace($subPath, '', $_SERVER['REQUEST_URI']);
	$callArray = array_values( array_filter( explode('/', $request) ) );
	$http1 = ( isset($callArray[0]) ? $callArray[0] : null );
	$http2 = ( isset($callArray[1]) ? $callArray[1] : null );


	global $db_host, $db_user, $db_pass, $db_name;
	$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	mysqli_set_charset($link,'utf8');


	if( $http1 === 'events' && !$http2 ){
		$SQL = "SELECT * FROM events ORDER BY date DESC";
		$result = mysqli_query($link, $SQL);
		if( !$result || mysqli_num_rows($result) < 1 ){
		  $errorMessage = array(['id' => 'error', 'name' => 'no items']);
		  echo json_encode($errorMessage);
		}else{

			while($row=mysqli_fetch_assoc($result)){
				$eventID = $row['id'];
				$SQL2 = "SELECT * FROM event_days WHERE event_id = $eventID";
				$result2 = mysqli_query($link, $SQL2);
				$emparray2 = array();
				while($row2=mysqli_fetch_assoc($result2)){
			        $emparray2[] = $row2;
			    }
				$row['days'] = $emparray2;
		        $emparray[] = $row;
		    }
		    echo json_encode($emparray);

		}
	}
	else if( $http1 === 'days' && $http2 ){
		$SQL = "SELECT * FROM event_day_galleries WHERE day_id = $http2";
		$result = mysqli_query($link, $SQL);
		if( !$result || mysqli_num_rows($result) < 1 ){
		  $errorMessage = array(['id' => 'error', 'name' => 'no items']);
		  echo json_encode($errorMessage);
		}else{
		  echo '[';
		  for ($i=0;$i<mysqli_num_rows($result);$i++) {
		    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result), JSON_PRETTY_PRINT);
		  }
		  echo ']';
		}
	}
	else if( $http1 === 'galleries' && $http2 ){
		$SQL = "SELECT * FROM event_day_gallery_items WHERE gallery_id = $http2";
		$result = mysqli_query($link, $SQL);
		if( !$result || mysqli_num_rows($result) < 1 ){
		  $errorMessage = array(['id' => 'error', 'name' => 'no items']);
		  echo json_encode($errorMessage);
		}else{
		  echo '[';
		  for ($i=0;$i<mysqli_num_rows($result);$i++) {
		    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result), JSON_PRETTY_PRINT);
		  }
		  echo ']';
		}
	}
	else{
	    $errorMessage = array(['id' => 'error', 'name' => 'no items']);
		echo json_encode($errorMessage);
	}


    mysqli_close($link);
