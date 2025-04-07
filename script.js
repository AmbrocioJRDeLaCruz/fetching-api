const OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '', //Agregar la Key de rapidapi
    'x-rapidapi-host': '' //agregar el host de rapidapi
  }
}

const fetchIpInfo = ip => {
  return fetch(`https://ip-lookup-threat-detection-api.p.rapidapi.com/bulk/${ip}`, OPTIONS)
  .then(res => res.json())
  .catch(err => console.log(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {value} = $input
  if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})