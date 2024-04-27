<script>
export default {
  data() {
    return {
      mcstatus: null // Initialize mcstatus as null initially
    };
  },
  mounted() {
    fetch('https://api.mcstatus.io/v2/status/java/teamsmp.spdns.eu:33221')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assign response data to mcstatus
        this.mcstatus = data;
      })
		.catch(error => {
			console.error('There was an issue GET\'ting: ', error);
			});
		}
	};
</script>

<template>
	<div class="status-wrapper">
		<h2>Server Status</h2>
		<p v-if="mcstatus.online">
			<span class="status-online-text">Online</span>
		</p>
	</div>
</template>
