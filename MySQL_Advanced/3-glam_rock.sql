-- Tâche 3 - Lister les groupes Glam rock par durée de vie (lifespan)
SELECT
    band_name,
    IF(split IS NULL OR split = 0, YEAR(CURDATE()) - formed, split - formed) AS lifespan
FROM
    metal_bands
WHERE
    style = 'Glam rock'
ORDER BY
    lifespan DESC;
