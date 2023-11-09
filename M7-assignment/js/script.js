// DOM HANDLER FUNCTION
const $ = (id) => document.getElementById(id)

// Count Rows
const rowCounter = (empCount) => {
    rowCount = table.rows.length - 1
    empCount.textContent = `(${rowCount})`
}

// DELETE EMPLOYEE
const deleteBtn = (row) => {
    if (confirm('Are you sure you want to delete this employee?') == true) {
        let i = row.parentNode.parentNode.rowIndex
        document.getElementById('employees').deleteRow(i)
        rowCounter(empCount)
        
    } else {
        // nothing
    }
}

// RESET THE FORM
const resetForm = () => {
    $('addForm').reset()
    $('id').focus()
}

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let table = $('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = $('empCount')

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // COLLECT VALUES FROM FORM ELEMENTS
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = $('id').value
    let name = $('name').value
    let empExt = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1)
    row.className = 'selectedRow'

    // Create button
    const btn = document.createElement('button')
    btn.className = 'button'
    btn.id = 'button'
    btn.setAttribute("onclick", "deleteBtn(this)")
    btn.textContent = 'X'

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    c1Value = document.createTextNode(empID)
    c2Value = document.createTextNode(name)
    c3Value = document.createTextNode(empExt)
    c4Value = document.createTextNode(email)
    c5Value = document.createTextNode(dept)
    c6Value = btn
    c1.appendChild(c1Value)
    c2.appendChild(c2Value)
    c3.appendChild(c3Value)
    c4.appendChild(c4Value)
    c5.appendChild(c5Value)
    c6.appendChild(c6Value)

    table.appendChild(row)
    
    resetForm()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    rowCounter(empCount)
})