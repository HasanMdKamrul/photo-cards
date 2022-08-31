// ** load photos 

const loadPhotos = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        response.ok ? console.log('Success') : console.log('Failed');
        const data = await response.json();
        displayPhotos(data);

    } catch (error) {
        console.log(error);
    }
};

// ** Data display here

const displayPhotos = photos =>{
    // ** Display position
    const cardContainer = document.getElementById('card-container');
    photos.forEach(photo => {
        const {title,thumbnailUrl,albumId} = photo;

        const div = document.createElement('div');

        div.classList.add("w-full","max-w-sm","bg-white","rounded-lg","border","border-gray-200","shadow-md","dark:bg-gray-800","dark:border-gray-700","bg-green-300");

        div.innerHTML = `
        <div class="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block"
          style="
            position: absolute;
            inset: 0px auto auto 0px;
            margin: 0px;
            transform: translate(477px, 83px);
          "
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="bottom"
        ></div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="mb-3 w-24 h-24 rounded-full shadow-lg"
          src="${thumbnailUrl}"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          ${title.slice(0,4)}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400"
          >Visual Designer</span
        >
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a
            data-modal-toggle="defaultModal"
            onclick = "loadDetailData(${albumId})"
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Album Detail</a
          >
          <a
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >Message</a
          >
        </div>
      </div>
        
        `;

        cardContainer.appendChild(div);
    })
};

// ** Album data load 

// const loadDetailData = (id)=>{
//     console.log(id)
// }

const loadDetailData =async (id)=>{
    console.log(id)
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        response.ok ? console.log('Success') : console.log('Failed');
        const data = await response.json();
        displayAlbulDetail(data);
    } catch (error) {
        console.log(error)
    }
}

// ** display albul detail

const displayAlbulDetail = (data) =>{
    // ** where to display modal
    const modalContainer = document.getElementById('modal')
    const {title} = data;

    modalContainer.innerHTML = `
    <div
          id="defaultModal"
          tabindex="-1"
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        >
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div
                class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
              >
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Album title:${title}
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <p
                  class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                >
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p
                  class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                >
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <!-- Modal footer -->
              <div
                class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
              >
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
    `

}

// ** Data lasder function call
loadPhotos();