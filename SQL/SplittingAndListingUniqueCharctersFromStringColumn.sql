select 
  product_id,
  unnest(string_to_array(features,null)) as feature
from products
order by product_id