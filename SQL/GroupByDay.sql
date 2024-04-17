SELECT CAST(created_at AS DATE) as day , description , count(name) as count from events
where name = 'trained'
group by day , description
