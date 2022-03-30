<?php

$file = $_FILES['file'];

if ( move_uploaded_file( $file['tmp_name'], 'uploads/' . $file['name'] ) ) {
  echo json_encode('success');
} else {
  echo json_encode('fail');
}
