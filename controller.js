

function okPushed() {

  var y = Number(document.input_area.daysY.value)
  var m = Number(document.input_area.daysM.value)
  var d = Number(document.input_area.daysD.value)
  var staff = document.input_area.staff.value
  var yu = Number(document.input_area.yu.value)
  var hika = Number(document.input_area.hikari.value)


  var divelement = document.createElement("div");
  divelement.innerHTML = "<a>" + y + "</a><a>年</a><a>" + m + "</a><a>月</a><a>" + d + "</a><a>日</a>&nbsp;<a>" + staff + "</a>&nbsp;<a>Yu&nbsp;:&nbsp;</a><a>" + yu + "</a>円&nbsp;<a>Hikari&nbsp;:&nbsp;</a><a>" + hika + "</a>円&nbsp;<a>合計&nbsp;:&nbsp;</a>" + (yu+hika) + "<a></a>円"

  var parentdiv = document.getElementById('output_area')
  parentdiv.appendChild(divelement)
}
