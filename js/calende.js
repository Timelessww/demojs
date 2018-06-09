
//日历
var jsonData;

			function removeChildren(pnode) {
				var childs = pnode.childNodes;
				for(var i = childs.length - 1; i >= 0; i--) {
					pnode.removeChild(childs.item(i));
				}
			}

			function add() {
				var date_in = document.getElementById("year");
				var date = date_in.value;
				date = date.replace('年', '').replace('月', '');
				var year = date.substring(0, 4);
				var month = date.substring(4);
				year = Number(year);
				month = Number(month);
				if(month == 1) {
					month = 12;
					year -= 1;
				} else {
					month -= 1;
				}
				date_in.value = year + "年" + month + "月";
				createC(year, month);
			}

			function formatDate(day) {
				day = Number(day);
				if(day < 10) {
					day = "0" + day;
				}
				var date_in = document.getElementById("year");
				var date = date_in.value;
				date = date.replace('年', '').replace('月', '');
				var year = date.substring(0, 4);
				var month = date.substring(4);
				year = Number(year);
				month = Number(month);
				if(month < 10) {
					month = "0" + month;
				}
				return year + '' + month + '' + day;
			}

			function minus() {
				var date_in = document.getElementById("year");
				var date = date_in.value;
				date = date.replace('年', '').replace('月', '');
				var year = date.substring(0, 4);
				var month = date.substring(4);
				year = Number(year);
				month = Number(month);
				if(month == 12) {
					month = 1;
					year = year + 1;
				} else {
					month = month + 1;
				}
				date_in.value = year + "年" + month + "月";
				createC(year, month);
			}

			function is_leap(year) {
				return(year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
			} //是否为闰年
			function createC(year, month) {
				var calend = document.getElementById('calendar');
				removeChildren(calend);
				var tr_title = document.createElement('tr');
				var titles = ['日', '一', '二', '三', '四', '五', '六'];
				for(var m = 0; m < titles.length; m++) {
					var td_title = document.createElement('td');
					td_title.innerText = titles[m];
					tr_title.appendChild(td_title);
				}
				calend.appendChild(tr_title);
				year = Number(year);
				month = Number(month) - 1;
				var nstr = new Date(year, month, 1); //当前Date资讯
				var firstday = nstr.getDay(); //星期几 
				var m_days = new Array(31, 28 + is_leap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //各月份的总天数
				var tr_str = Math.ceil((m_days[month] + firstday) / 7); //表格所需要行数
				for(i = 0; i < tr_str; i++) { //表格的行
					var tr = document.createElement("tr");
					for(k = 0; k < 7; k++) { //表格每行的单元格
						var td = document.createElement("td");
						idx = i * 7 + k; //单元格自然序列号
						date_str = idx - firstday + 1; //计算日期
						(date_str <= 0 || date_str > m_days[month]) ? date_str = "": date_str = idx - firstday + 1; //过滤无效日期（小于等于零的、大于月总天数的）
						td.innerText = date_str;
						if(date_str != '') {
							td.onclick = function() {
								console.log(this.innerText);
								var f_d = formatDate(this.innerText);
								console.log(f_d);
							}
						}
						tr.appendChild(td);
					}
					calend.appendChild(tr);
				}
			}
			createC(2018, 5);