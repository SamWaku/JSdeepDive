// Expected URL = http://localhost:4000/appointments?user_id=6165f9c2d09e5e5603ca539b

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const username = urlParams.get("username");
document.getElementById('goto-dashboard').href = `/dashboard?username=${username}`
const bodyContent = document.querySelector("#content");

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

const getScheduledAppointments = async (username) => {
    if (username) {
        const response = await fetch(
            `http://localhost:4000/api/user/${username}/appointments`,
            options
        );

        if (!response.ok) {
            alert(`An error has occurred: ${response.status}`)
        }
        const { data } = await response.json();

        if (data.length > 0) {
            const newAppointment = data.map((appointment, i) => {
                return `
                    <tr>
                        <th scope="row">${i + 1}</th>
                        <td>${appointment?.name}</td>
                        <td>${appointment?.email}</td>
                        <td>
                           ${appointment?.reason}
                        </td>
                        <td>${new Date(appointment?.userAvailabilityId?.date).toDateString()}</td> 
                     </tr>
                `;
            });
            bodyContent.innerHTML = newAppointment.join(" ");
        } else {
            bodyContent.innerHTML = `<tr>
                                        <td colspan="5">No record found</td>
                                    </tr>`;
        }
    }
};

getScheduledAppointments().catch((error) => {
    alert(error.message); // 'An error has occurred: 404'
});

getScheduledAppointments(username);
