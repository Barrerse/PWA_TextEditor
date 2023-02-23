const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  butInstall.disabled = false;
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    // Set `deferredPrompt` to `null` since it can only be used once
    deferredPrompt = null;
    // Hide the button
    butInstall.disabled = true;
  });
  

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Jate was installed.');
  });