({
    init : function(component, event, helper) {
        //component.set('v.columns', [
        //    { label: 'Record Type', fieldName: 'recordType', type: 'text', },
        //    { label: 'Count', fieldName: 'recordCount', type: 'number', initialWidth: 50, 
        //        cellAttributes: { alignment: 'right' }
        //    }
        //]);
        
        //component.set('v.data', [
        //    { id: 1, selected: true, recordType: 'Chart of Accounts', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 2, selected: true, recordType: 'Customers', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 3, selected: false, recordType: 'Customer Opening Balances', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 4, selected: false, recordType: 'Suppliers', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 5, selected: false, recordType: 'Supplier Opening Balances', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 6, selected: false, recordType: 'Contacts', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 7, selected: false, recordType: 'Employees', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 8, selected: false, recordType: 'Terms', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 9, selected: false, recordType: 'Products', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 10, selected: false, recordType: 'Bank Accounts', recordCount: Math.round(Math.random() * 1000) },
        //    { id: 11, selected: false, recordType: 'Bank Opening Balances', recordCount: Math.round(Math.random() * 1000) },
        //]);
            
        component.set('v.selected', component.get('v.data').filter(function(row){
            return row.selected;
        }));
    },
    updateSelected : function(component, event, helper) {
        var checkbox = event.target;
        var data = component.get('v.data');
            
        var row = data.filter(function(row){
            if (row.id == checkbox.value) {
                row.selected = checkbox.checked;
                return true;
            }
            
            return false;
        })[0];
   
        var selected = data.filter(function(row){
            return row.selected;
        });
            
        component.set('v.selected', selected);
    }
})
