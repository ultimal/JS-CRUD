class CustomTable
{
  constructor(var_name, div_id, headings,add_fields,data_update_delegate) {
    this.variable_name = var_name;
    this.div = div_id;
    this.header_titles = headings;
    this.input_fields = add_fields;
    this.item_list = new Array();
    this.update_delegate = data_update_delegate;


    this.update_field_data = function(data)
    {
      for (var i=0; i < this.input_fields.length; i++)
      {
        if (this.input_fields[i][0] == data[0])
        {
          this.input_fields[i][2] = data[1];
        }
      }
      this.drawTable();
    }

    this.add_item = function(items)
    {
      this.item_list.push(items);
      this.drawTable();
    }

    this.add_item_from_fields = function()
    {
      var data = new Array();
      for (var i = 0; i < this.input_fields.length; i++)
        if (this.input_fields[i][1] == "dropdown")
        {
          var e = document.getElementById(this.input_fields[i][0]);
          data.push(e.options[e.selectedIndex].value);
        }
        else {
          data.push(document.getElementById(this.input_fields[i][0]).value);
        }
      this.item_list.push(data);
      this.drawTable();
    }

    this.remove_item = function(item_index)
    {
      this.item_list.splice(item_index, 1);
      this.drawTable();
    }

    this.drawTable = function()
    {
      var t = "<table class='table' style='width:100%;'>";

      // Draw Table Header
      t += "<thead>";
      t += " <tr>";
      t += "  <th width=1%>#</th>";

      for (var i = 0; i < this.header_titles.length; i++)
      { t += "<th>" + this.header_titles[i] + "</th>"; }
      t += "<th></th>";
      t += " </tr>";
      t += "</thead>";

      // Draw Table body
      t += "<tbody>";

      for (var i = 0; i < this.item_list.length; i++)
      {
        t += "<tr>";
        t += "<td>" + i + "</td>";

        for (var j = 0; j < this.item_list[i].length; j++)
        {
          t += "<td>" + this.item_list[i][j] + "</td>"
        }
        t += "<td><a href='#'><span class='glyphicon glyphicon-remove' style='color:red' onclick='"+this.variable_name+".remove_item("+i+");" + this.update_delegate + "'></span></a></td>";
        t += "</tr>"
      }

      // Draw input boxes
      t += "<tr>";
      t += "<td></td>";
      for (var i=0; i < this.input_fields.length; i++)
      {
        if (this.input_fields[i][1] == "text")
        {
          t += "<td><input class='form-control' type='text' placeholder='" + this.header_titles[i] + "' id='"+this.input_fields[i][0]+"'/>";
        }
        else {
          t += "<td>";
          t += "<select class='form-control' id='" + this.input_fields[i][0] + "'>";
          for (var j=0; j<this.input_fields[i][2].length;j++)
            t += "<option>" + this.input_fields[i][2][j] + "</option>";
          t += "</select>"
          t += "</td>";
        }
      }
      t += "<td width=1%><a href='#'><span class='glyphicon glyphicon-plus' onclick='" + this.variable_name + ".add_item_from_fields(); " + this.update_delegate + "'></span></a></td>";
      t += "</tr>";

      t += "</tbody>";
      t += "</table>";

      document.getElementById(this.div).innerHTML = t;
    }

    // Draw the Table once all initialization is complete
    this.drawTable();
  }
}
