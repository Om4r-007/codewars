SELECT bool ,
      CASE 
            WHEN bool THEN 'Yes'
            Else 'No'
       END AS res
FROM booltoword
