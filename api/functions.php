<?php
require_once('config.php');



function router($paths){

  // http request
  $subPath = str_replace('/index.php', '', $_SERVER['PHP_SELF']);
  $request = str_replace($subPath, '', $_SERVER['REQUEST_URI']);
  $callArray = array_values( array_filter( explode('/', $request) ) );
  $http1 = ( isset($callArray[0]) ? $callArray[0] : null );
  $http2 = ( isset($callArray[1]) ? $callArray[1] : null );

  // paths from the router array
  foreach ($paths as $path) {

    $thisPath         = $path[0];
    $thisPathParts    = array_values( array_filter( explode('/', $thisPath) ) );
    $thishttp1        = ( isset($thisPathParts[0]) ? $thisPathParts[0] : null );
    $thishttp2        = ( isset($thisPathParts[1]) ? $thisPathParts[1] : null );
    $thisSQL          = $path[1];
    $isArray          = ($path[2] == 'array' ? 1 : 0);

    // Define which SQL to use
    // 2 parts request
    if( $http2 ){
      if( $thishttp2 && $http1 === $thishttp1 ){
        $thisSQL = str_replace( "$$thishttp2", "'$http2'", $thisSQL);
        $resultSQL = $thisSQL;
        break;
      }
    // 1 part request
    }else{
      if( $http1 === $thishttp1 ){
        if( !$thishttp2 ){
          $resultSQL = $thisSQL;
          break;
        }
      }

    } // end foreach

  }



  if( !isset($resultSQL) ){

    $errorMessage = array(['id' => 'error', 'name' => 'no items']);
    echo json_encode($errorMessage);

  }else{

    global $db_host, $db_user, $db_pass, $db_name;
    $link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    mysqli_set_charset($link,'utf8');

    $result = mysqli_query($link, $resultSQL);

    if( !$result || mysqli_num_rows($result) < 1 ){
      $errorMessage = array(['id' => 'error', 'name' => 'no items']);
      echo json_encode($errorMessage);
    }else{
      echo ($isArray ? '[' : null);
      for ($i=0;$i<mysqli_num_rows($result);$i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result), JSON_PRETTY_PRINT);
      }
      echo ($isArray ? ']' : null);
    }

    mysqli_close($link);

  }


}
