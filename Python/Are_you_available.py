def check_availability(schedule, current_time):
    for s , f in schedule :
        if s <= current_time < f :
            return f
    return True
