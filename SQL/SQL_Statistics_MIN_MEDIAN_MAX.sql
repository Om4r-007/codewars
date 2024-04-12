SELECT MIN(result.score) AS min ,percentile_cont(0.5) WITHIN GROUP (ORDER BY result.score) AS median, MAX(result.score) AS max
FROM result
