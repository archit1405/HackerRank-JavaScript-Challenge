class Polygon {
    constructor(lengths) 
    {
        var polygonPerimeter = 0;
        for (var index in lengths)
            {
                polygonPerimeter += lengths[index];
            }
        
        this.my_perimeter = polygonPerimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }
    
}