({
    init : function(component, event, helper) {
        var row = component.get("v.row");
        var property = component.get("v.property");
        
        component.set("v.value", row[property]);
    }
})
