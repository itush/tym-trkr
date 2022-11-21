
fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector(".d-btn").addEventListener("click", dailyData);
        document.querySelector(".w-btn").addEventListener("click", weeklyData);
        document.querySelector(".m-btn").addEventListener("click", monthlyData);

        function dailyData() {
            /**daily Work-Data**/
            document.querySelector(".w-current").innerText = data[0].timeframes.daily.current + `hrs`;
            document.querySelector(".w-previous").innerText = `Yesterday - ` + data[0].timeframes.daily.previous + `hrs`;
            /**daily Play-Data**/
            document.querySelector(".p-current").innerText = data[1].timeframes.daily.current + `hrs`;
            document.querySelector(".p-previous").innerText = `Yesterday - ` + data[1].timeframes.daily.previous + `hrs`;
            /**daily Study-Data**/
            document.querySelector(".s-current").innerText = data[2].timeframes.daily.current + `hrs`;
            document.querySelector(".s-previous").innerText = `Yesterday - ` + data[2].timeframes.daily.previous + `hrs`;
            /**daily Exercise-Data**/
            document.querySelector(".e-current").innerText = data[3].timeframes.daily.current + `hrs`;
            document.querySelector(".e-previous").innerText = `Yesterday - ` + data[3].timeframes.daily.previous + `hrs`;
            /**daily Social-Data**/
            document.querySelector(".so-current").innerText = data[4].timeframes.daily.current + `hrs`;
            document.querySelector(".so-previous").innerText = `Yesterday - ` + data[4].timeframes.daily.previous + `hrs`;
            /**daily Self Care-Data**/
            document.querySelector(".se-current").innerText = data[5].timeframes.daily.current + `hrs`;
            document.querySelector(".se-previous").innerText = `Yesterday - ` + data[5].timeframes.daily.previous + `hrs`;
        }

        function weeklyData() {
            /**weekly Work-Data**/
            document.querySelector(".w-current").innerText = data[0].timeframes.weekly.current + `hrs`;
            document.querySelector(".w-previous").innerText = `Last Week - ` + data[0].timeframes.weekly.previous + `hrs`;
            /**weekly Play-Data**/
            document.querySelector(".p-current").innerText = data[1].timeframes.weekly.current + `hrs`;
            document.querySelector(".p-previous").innerText = `Last Week - ` + data[1].timeframes.weekly.previous + `hrs`;
            /**weekly Study-Data**/
            document.querySelector(".s-current").innerText = data[2].timeframes.weekly.current + `hrs`;
            document.querySelector(".s-previous").innerText = `Last Week - ` + data[2].timeframes.weekly.previous + `hrs`;
            /**weekly Exercise-Data**/
            document.querySelector(".e-current").innerText = data[3].timeframes.weekly.current + `hrs`;
            document.querySelector(".e-previous").innerText = `Last Week - ` + data[3].timeframes.weekly.previous + `hrs`;
            /**weekly Social-Data**/
            document.querySelector(".so-current").innerText = data[4].timeframes.weekly.current + `hrs`;
            document.querySelector(".so-previous").innerText = `Last Week - ` + data[4].timeframes.weekly.previous + `hrs`;
            /**weekly Self Care-Data**/
            document.querySelector(".se-current").innerText = data[5].timeframes.weekly.current + `hrs`;
            document.querySelector(".se-previous").innerText = `Last Week - ` + data[5].timeframes.weekly.previous + `hrs`;
        }

        function monthlyData() {
            /**monthly Work-Data**/
            document.querySelector(".w-current").innerText = data[0].timeframes.monthly.current + `hrs`;
            document.querySelector(".w-previous").innerText = `Last Month - ` + data[0].timeframes.monthly.previous + `hrs`;
            /**monthly Play-Data**/
            document.querySelector(".p-current").innerText = data[1].timeframes.monthly.current + `hrs`;
            document.querySelector(".p-previous").innerText = `Last Month - ` + data[1].timeframes.monthly.previous + `hrs`;
            /**monthly Study-Data**/
            document.querySelector(".s-current").innerText = data[2].timeframes.monthly.current + `hrs`;
            document.querySelector(".s-previous").innerText = `Last Month - ` + data[2].timeframes.monthly.previous + `hrs`;
            /**monthly Exercise-Data**/
            document.querySelector(".e-current").innerText = data[3].timeframes.monthly.current + `hrs`;
            document.querySelector(".e-previous").innerText = `Last Month - ` + data[3].timeframes.monthly.previous + `hrs`;
            /**monthly Social-Data**/
            document.querySelector(".so-current").innerText = data[4].timeframes.monthly.current + `hrs`;
            document.querySelector(".so-previous").innerText = `Last Month - ` + data[4].timeframes.monthly.previous + `hrs`;
            /**monthly Self Care-Data**/
            document.querySelector(".se-current").innerText = data[5].timeframes.monthly.current + `hrs`;
            document.querySelector(".se-previous").innerText = `Last Month - ` + data[5].timeframes.monthly.previous + `hrs`;
        }
    })

