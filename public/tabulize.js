

if(document.getElementById('awesome-table')) {


let groupopen = document.querySelectorAll('tr').length < 20;

let table = new Tabulator("#awesome-table", {
  // height: (window.screen.availHeight - 100) + 'px',
  groupBy: "Category",
  groupToggleElement: "header",
  groupStartOpen: groupopen,
  layout: "fitDataStretch",
  layoutColumnsOnNewData: true,
  responsiveLayout:"collapse",

  columns:[
      {title: "Name", field: "Name", responsive: 0, formatter: "html", width: 200},
      {title: "Description", field: "Description", minWidth: 900,variableHeight:true,headerFilter:true, responsive: 2},
      {title: "Stars", field: "Stars"},
      {title: "Forks", field: "Forks"},
      {title: "️Open", field: "️Open"},
      {title: "️Closed", field: "️Closed"},
      {title: "Created", field: "Created", width: 120},
      {title: "Pushed", field: "Pushed", width: 120},
      {title: "Size", field: "Size"},
      {title: "Language", field: "Language"},
      {title: "Archived", field: "Archived"},
      {title: "License", field: "License"},
      {title: "Category", field: "Category", visible: true},

  ]
});

document.getElementById('btn-ungroup').addEventListener('click', function(){
  table.setGroupBy(null)
});

document.getElementById('btn-group').addEventListener('click', function(){
  table.setGroupBy('Category')
});

//Define variables for input elements
var fieldEl = document.getElementById("filter-field");
var typeEl = document.getElementById("filter-type");
var valueEl = document.getElementById("filter-value");

//Custom filter example
function customFilter(data){
    return data.car && data.rating < 3;
}

//Trigger setFilter function with correct parameters
function updateFilter(){
  var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  var typeVal = typeEl.options[typeEl.selectedIndex].value;

  var filter = filterVal == "function" ? customFilter : filterVal;

  if(filterVal == "function" ){
    typeEl.disabled = true;
    valueEl.disabled = true;
  }else{
    typeEl.disabled = false;
    valueEl.disabled = false;
  }

  if(filterVal){
    table.setFilter(filter,typeVal, valueEl.value);
  }
}

//Update filters on value change
document.getElementById("filter-field").addEventListener("change", updateFilter);
document.getElementById("filter-type").addEventListener("change", updateFilter);
document.getElementById("filter-value").addEventListener("keyup", updateFilter);

//Clear filters on "Clear Filters" button click
document.getElementById("filter-clear").addEventListener("click", function(){
  fieldEl.value = "Description";
  typeEl.value = "like";
  valueEl.value = "";

  table.clearFilter();
});

} //end if for awesome-table search


$(document).ready(function() {
  $.getJSON('/indexLinks.json')
    .then(function(data) {
      $('#sel-search').select2({
        width: '200px',
        placeholder: "Search",
        data: data.results})
    })
    .catch(err => console.log(err));

  $('#sel-search').on('change', function(e){
    let lnk = e.target.value
    console.log(lnk)
    window.location = lnk
  });
});