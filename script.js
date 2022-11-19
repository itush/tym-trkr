
fetch("./data.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    document.querySelector(".d-btn").addEventListener("click", dailyData);
    document.querySelector(".w-btn").addEventListener("click", weeklyData);
    document.querySelector(".m-btn").addEventListener("click", monthlyData);

    function dailyData() {
        /**daily Work-Data**/
        document.querySelector(".w-current").innerText = data[0].timeframes.daily.current;
        document.querySelector(".w-previous").innerText = data[0].timeframes.daily.previous;
        /**daily Play-Data**/
        document.querySelector(".p-current").innerText = data[1].timeframes.daily.current;
        document.querySelector(".p-previous").innerText = data[1].timeframes.daily.previous;
        /**daily Study-Data**/
        document.querySelector(".s-current").innerText = data[2].timeframes.daily.current;
        document.querySelector(".s-previous").innerText = data[2].timeframes.daily.previous;
        /**daily Exercise-Data**/
        document.querySelector(".e-current").innerText = data[3].timeframes.daily.current;
        document.querySelector(".e-previous").innerText = data[3].timeframes.daily.previous;
        /**daily Social-Data**/
        document.querySelector(".so-current").innerText = data[4].timeframes.daily.current;
        document.querySelector(".so-previous").innerText = data[4].timeframes.daily.previous;
        /**daily Self Care-Data**/
        document.querySelector(".se-current").innerText = data[5].timeframes.daily.current;
        document.querySelector(".se-previous").innerText = data[5].timeframes.daily.previous;
    }

    function weeklyData() {
        /**weekly Work-Data**/
        document.querySelector(".w-current").innerText = data[0].timeframes.weekly.current;
        document.querySelector(".w-previous").innerText = data[0].timeframes.weekly.previous;
        /**weekly Play-Data**/
        document.querySelector(".p-current").innerText = data[1].timeframes.weekly.current;
        document.querySelector(".p-previous").innerText = data[1].timeframes.weekly.previous;
        /**weekly Study-Data**/
        document.querySelector(".s-current").innerText = data[2].timeframes.weekly.current;
        document.querySelector(".s-previous").innerText = data[2].timeframes.weekly.previous;
        /**weekly Exercise-Data**/
        document.querySelector(".e-current").innerText = data[3].timeframes.weekly.current;
        document.querySelector(".e-previous").innerText = data[3].timeframes.weekly.previous;
        /**weekly Social-Data**/
        document.querySelector(".so-current").innerText = data[4].timeframes.weekly.current;
        document.querySelector(".so-previous").innerText = data[4].timeframes.weekly.previous;
        /**weekly Self Care-Data**/
        document.querySelector(".se-current").innerText = data[5].timeframes.weekly.current;
        document.querySelector(".se-previous").innerText = data[5].timeframes.weekly.previous;
    }

    function monthlyData() {
        /**monthly Work-Data**/
        document.querySelector(".w-current").innerText = data[0].timeframes.monthly.current;
        document.querySelector(".w-previous").innerText = data[0].timeframes.monthly.previous;
        /**monthly Play-Data**/
        document.querySelector(".p-current").innerText = data[1].timeframes.monthly.current;
        document.querySelector(".p-previous").innerText = data[1].timeframes.monthly.previous;
        /**monthly Study-Data**/
        document.querySelector(".s-current").innerText = data[2].timeframes.monthly.current;
        document.querySelector(".s-previous").innerText = data[2].timeframes.monthly.previous;
        /**monthly Exercise-Data**/
        document.querySelector(".e-current").innerText = data[3].timeframes.monthly.current;
        document.querySelector(".e-previous").innerText = data[3].timeframes.monthly.previous;
        /**monthly Social-Data**/
        document.querySelector(".so-current").innerText = data[4].timeframes.monthly.current;
        document.querySelector(".so-previous").innerText = data[4].timeframes.monthly.previous;
        /**monthly Self Care-Data**/
        document.querySelector(".se-current").innerText = data[5].timeframes.monthly.current;
        document.querySelector(".se-previous").innerText = data[5].timeframes.monthly.previous;
    }
})

