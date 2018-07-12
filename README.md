# slds-list-builder

https://www.lightningdesignsystem.com/components/list-builder/

## Attributes

`columns` List _default []_

`data` List _default []_

### Example values for attributes

```
component.set('v.columns', [
    { label: 'Record Type', fieldName: 'recordType', type: 'text', },
    { label: 'Count', fieldName: 'recordCount', type: 'number', initialWidth: 50, 
      cellAttributes: { alignment: 'right' }
    }
]);

component.set('v.data', [
    { id: 1, selected: true, recordType: 'Chart of Accounts', recordCount: 1 },
    { id: 2, selected: true, recordType: 'Customers', recordCount: 1 },
    { id: 3, selected: false, recordType: 'Customer Opening Balances', recordCount: 1 },
    { id: 4, selected: false, recordType: 'Suppliers', recordCount: 1 },
    { id: 5, selected: false, recordType: 'Supplier Opening Balances', recordCount: 1 },
    { id: 6, selected: false, recordType: 'Contacts', recordCount: 1 },
    { id: 7, selected: false, recordType: 'Employees', recordCount: 1 },
    { id: 8, selected: false, recordType: 'Terms', recordCount: 1 },
    { id: 9, selected: false, recordType: 'Products', recordCount: 1 },
    { id: 10, selected: false, recordType: 'Bank Accounts', recordCount: 1 },
    { id: 11, selected: false, recordType: 'Bank Opening Balances', recordCount: 1 },
]);
```
