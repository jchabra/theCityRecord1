$( document ).ready(function() {
  $( "#advancedSearchOption a" ).click(function() {
    $( "#advancedSearch" ).toggle();
  });

  $( "#cancelButton" ).click(function() {
    $( "#advancedSearch" ).hide();
  });

  // datepicker
  $( function() {
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
    .datepicker({
      defaultDate: "06/24/1873",
      changeMonth: true,
      changeYear: true,
      minDate: "06/24/1873",
      maxDate: "03/31/1876",
    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
    to = $( "#to" ).datepicker({
      defaultDate: "06/24/1873",
      changeMonth: true,
      changeYear: true,
      minDate: "06/24/1873",
      maxDate: "03/31/1876",
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
      return date;
    }
  } );

}); 

var agencyNames=new Array("Select", "Aqueduct Commission", "Auditing Bureau", "Board of Aldermen", "Board of Assessors", "Board of Assistant Aldermen", "Board of Education", "Board of Estimate and Apportionment", "Board of Excise", "Bureau for the Collection of Arrears", "Bureau for the Collection of Assessments", "Bureau for the Collection of City Revenue", "Bureau for the Collection of Taxes", "Bureau for the Reception and Payment of Moneys", "Bureau of Arrears", "Bureau of Chief Engineer", "Bureau of Construction of Roads and Avenues", "Bureau of County Affairs", "Bureau of Incumbrances", "Bureau of Inspectors of Buildings", "Bureau of Lamps and Gas", "Bureau of Markets", "Bureau of Personal Taxes", "Bureau of Repairs and Supplies", "Bureau of Sewers", "Bureau of Street Cleaning", "Bureau of Street Improvement", "Bureau of Street Improvements", "Bureau of Streets", "Bureau of the City Chamberlain", "Bureau of the Corporation Attorney", "Bureau of the Public Administrator", "Bureau of the Water Purveyor", "Bureau of the Water Register", "Bureau of Vital Statistics", "City Court of New York", "City Judges' Office", "City Record Office", "Commissioner (of Public Works) Office", "Commissioner of Jurors", "Common Council", "Comptroller's Office", "Coroner's Office", "County Clerk's Office", "Court of Common Pleas", "Court of General Sessions", "Courts of Special Sessions", "Department of Public Charities and Correction", "Department of Buildings", "Department of Docks", "Department of Public Parks", "Department of Public Works", "Department of Street Cleaning", "Department of Taxes and Assessment", "District Attorney's Office", "District Police Courts", "Division of Vital Statistics", "Fire Department", "Health Department", "(Justices, or) Judicial District Courts", "Law Department", "License Bureau", "Marine Court", "Mayor's Marshal's Office", "Mayor's Office", "Office of the Corporation Attorney", "Office of the Counsel to the Corporation", "Police Department", "Recorder's Office", "Registrar's Office", "Sanitary Bureau", "Sheriff's Office", "Superior Court", "Supreme Court", "Surrogate's Court Office");

for(var i=0; i<agencyNames.length; i++)
  $('select#agencyList').append('<option value="' + agencyNames[i] + '">' + agencyNames[i] + '</option>');


// Search Results
  // $( "#testModal" ).on("click", function() {
  //   $("#dialog" ).dialog("open");
  // });

$( function() {
  $( "#dialog" ).dialog({
    modal: true,
    autoOpen: false,
    show: {
      effect: "easing",
      duration: 1000
    },
  });
  $( "#testModal" ).click(function() {
   $( "#dialog" ).dialog( "open" );
   return false;
 });
} );
