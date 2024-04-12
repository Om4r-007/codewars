def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    numbers = [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8]
    result = 0
    
    for num in numbers:
        result += num ** 2
    
    result2 = result ** 0.5
    result3 = result2 / 2
    result4 = int(result3)
    return result4 

predict_age(65,60,75,55,60,63,64,45)
