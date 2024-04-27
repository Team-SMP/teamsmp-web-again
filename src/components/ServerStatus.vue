<template>
    <div class="thing_STATUS_wrapperdiv">
        <h2 class="thing_STATUS_heading">Server Status</h2>
        <p v-html="serverStatus"></p>
    </div>
</template>
   
<style lang="stylus">
    div.thing_STATUS_wrapperdiv
        margin 1.5rem 0px 2rem 0px
        padding 1rem 1.5rem
        width 30%
        border-radius 1.5rem
        background #03231e
        box-shadow 0.5rem 0.5rem 2rem #010a08
        h2
            font-size 2rem
            line-height 0.2
        p.part_STATUS_loading
            font-size 1.4rem
            font-weight bold
            font-style italic
            color #949997
        p.part_STATUS_online
            font-size 1.4rem
            font-weight bold
            color #1a935f
        p.part_STATUS_offline
            font-size 1.4rem
            font-weight bold
            color #d32e70
</style>

   <script>
   export default {
    data() {
       return {
         serverStatus: "<p class=\"part_STATUS_loading\">Loading...</p>",
         host: 'teamsmp.spdns.eu',
         port: 33221,
       };
    },
    mounted() {
       this.updateStatus();
       setInterval(this.updateStatus.bind(this), 5000); // Update status every minute
    },
    methods: {
       async updateStatus() {
         try {
           const response = await fetch(`https://api.mcstatus.io/v2/status/java/${this.host}:${this.port}`);
           const data = await response.json();
           this.serverStatus = data.online ? "<p class=\"part_STATUS_online\">Online</p>" : "<p class=\"part_STATUS_offline\">Offline</p>";
         } catch (error) {
           console.error('Error fetching server status:', error);
           this.serverStatus = 'Error fetching server status: ' + error.message;
         }
       },
    },
   };
   </script>
   