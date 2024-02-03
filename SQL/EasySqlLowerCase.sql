/*  SQL  */
update demographics 
SET race = LOWER(race);
select *
from demographics 