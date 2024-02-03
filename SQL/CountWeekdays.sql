create or replace function weekdays(_start date, _finish date) 
returns integer as $$

  select count(*) filter (where extract(dow from g.d) between 1 and 5)::int as weekdays
  from generate_series(least(_start, _finish), greatest(_start, _finish), interval '1 day') as g(d);

$$ language sql;