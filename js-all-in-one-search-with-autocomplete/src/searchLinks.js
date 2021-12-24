// Search links data
const searchLinks = {
  'google-icon': 'https://www.google.com/search?q=',
  'youtube-icon': 'https://www.youtube.com/results?search_query=',
  'twitter-icon': 'https://twitter.com/', 
  'instagram-icon': 'https://www.instagram.com/',
  'twitch-icon': 'https://www.twitch.tv/search?term=',
  'soundcloud-icon': 'https://soundcloud.com/search?q=',
  'facebook-icon': 'https://www.facebook.com/search/?q=',
  'wiki-icon': 'https://en.wikipedia.org/wiki/'
}

const bindSearchEvents = function(fn, searchInput) {
  Object.keys(searchLinks).forEach(link => {
    fn(`.${link}`).addEventListener('click', (e) => {  
      if (searchInput.value) {
        window.open(`${searchLinks[link]}${searchInput.value}`, '_blank');
      } else {
        console.log('No search terms');
      }
    });
  });
}

export {
  bindSearchEvents
};