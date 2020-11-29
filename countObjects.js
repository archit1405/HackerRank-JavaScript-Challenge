function getCount(objects) {
    var check = 0;
    for(var index in objects)
    {
        if (objects[index].x == objects[index].y)
        {
            check++;
        }
    }
    return check;