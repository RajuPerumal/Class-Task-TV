document.querySelector("button").addEventListener("click",result);

async function result(){
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        console.log(res);
        // var name = document.getElementById("card-title");
        // name.innerText = res[0].show.name;

        if (res.length > 0) {
            var show = res[0].show;

            document.getElementById("card-img").src = show.image ? show.image.medium : 'https://via.placeholder.com/210x295.png?text=No+Image';
            document.getElementById("card-title").innerText = show.name;
            // document.getElementById("card-genre").innerHTML = `<b>Genre:</b> ${show.genres.join(', ')}`;
            document.getElementById("card-genre").innerHTML = `<b>Genre:</b> ${show.genres[1]}`;

            document.getElementById("card-rating").innerHTML = `<b>Rating:</b> ${show.rating.average ? show.rating.average : 'N/A'}`;
            document.getElementById("card-premiered").innerHTML = `<b>Premiered:</b> ${show.premiered ? show.premiered : 'N/A'}`;
            document.getElementById("card-runtime").innerHTML = `<b>Runtime:</b> ${show.runtime ? show.runtime + ' minutes' : 'N/A'}`;
            document.getElementById("card-schedule").innerHTML = `<b>Schedule:</b> ${show.schedule.days.join(', ')} at ${show.schedule.time ? show.schedule.time : 'N/A'}`;
            // document.getElementById("card-official-site").innerHTML =`<b>Official Site:</b> ${show.officialSite ? show.officialSite : 'N/A'}` ;
            document.getElementById("card-official-site").innerHTML = `<b>Network:</b> ${show.network.name ?show.network.name  : 'N/A'}`;
            document.getElementById("card-summary").innerHTML = `<b>Summary:</b> ${show.summary}`;

            document.getElementById("show-card").classList.remove("hidden");
       
        } else {
            alert('No shows found.');
        }

    } catch (error) {
        console.log(error);
    }
}