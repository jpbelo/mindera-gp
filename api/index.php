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
        // all events
        '/events',
        'SELECT * FROM events ORDER BY date DESC',
        'array'
      ],[
        // event days
        '/events/event_id',
        'SELECT * FROM event_days WHERE event_id = $event_id',
        'array'
      ],[
        // day galleries
        '/days/day_id',
        'SELECT * FROM event_day_galleries WHERE day_id = $day_id',
        'array'
      ],[
        // gallery items
        '/galleries/gallery_id',
        'SELECT * FROM event_day_gallery_items WHERE gallery_id = $gallery_id',
        'array'
      ]
  ];

  router($paths);
