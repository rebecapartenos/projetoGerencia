<?php
  $destIP="localhost";
  $community = "public";
  $oid = ".1.3.6.1.2.1.4.9.0";

  $ipInDelivers = snmp2_get( $destIP,$community ,$oid);

  //retira somente o dado inteiro do retorno da consulta
  $ipIn = explode(" ", $ipInDelivers);
  //var_dump($ipIn);
  //gera a saída que será recebida pelo front-end  
  echo $ipIn[1];
?>
