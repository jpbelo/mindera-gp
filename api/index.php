<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  require_once('functions.php');


  // the first argument is the route and the secund is the query
  // the route can have 1 or 2 parts
  // with 1 part will return a multi level array
  // with 2 parts will return a simple array
  //    the first is compared to the http call
  //    the secund is the variable name that can be used inside the query

  $paths = [
      [
        '/events',
        'SELECT * FROM events ORDER BY date DESC',
        'array'
      ],[
        '/events/event_id',
        'SELECT * FROM event_days WHERE event_id = $event_id',
        'array'
      ],[
        '/days/day_id',
        'SELECT * FROM event_day_lists WHERE day_id = $day_id',
        'array'
      ],[
        '/lists/list_id',
        'SELECT * FROM event_day_list_elements WHERE list_id = $list_id',
        'array'
      ],[
        '/elements/element_id',
        'SELECT * FROM event_day_list_elements WHERE id = $element_id',
        'single'
      ]
  ];

  router($paths);
