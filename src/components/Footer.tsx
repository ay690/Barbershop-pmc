const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-playfair font-bold">
              PMC<span className="text-gold">Barber</span>
            </a>
            <p className="mt-4 text-gray-400">
              Premium men's grooming services in an upscale environment with attention to every detail.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-yelp" viewBox="0 0 16 16">
                  <path d="m4.188 10.095.736-.17A2.28 2.28 0 0 0 6.586 7.9a1.66 1.66 0 0 0-.151-.442 1.97 1.97 0 0 0-.156-.33 2.25 2.25 0 0 0-1.67-.96h-.023a2.29 2.29 0 0 0-1.666.887 2.77 2.77 0 0 0-.17.267 1.94 1.94 0 0 0-.223.86c.028.285.14.702.4 1.122.39.677 1.058 1.094 1.79 1.12l.025-.215a2.27 2.27 0 0 0 .32-.858l.004-.031-.003-.025Zm1.23 1.887.217.72c.14.283.34.545.589.742a1.66 1.66 0 0 0 .741.31.96.96 0 0 0 .22.026 1.38 1.38 0 0 0 .464-.09 2.25 2.25 0 0 0 1.16-1.5v-.024a2.3 2.3 0 0 0-.189-1.858 2.94 2.94 0 0 0-.189-.307 1.95 1.95 0 0 0-.771-.59 1.89 1.89 0 0 0-.878-.09c-.277.043-.671.196-1.012.482-.563.476-.774 1.174-.767 1.921l.203.072a2.41 2.41 0 0 0 .304.829l.13.022Zm8.39-3.698.024.021.005-.028a2.07 2.07 0 0 0-.135-.917 2.29 2.29 0 0 0-1.251-1.257 2.81 2.81 0 0 0-.312-.092 1.82 1.82 0 0 0-.79.035 1.93 1.93 0 0 0-.743.404 5.99 5.99 0 0 0-.498.538c-.171.212-.339.463-.437.686a1.46 1.46 0 0 0-.067.782 1.57 1.57 0 0 0 .44.878c.154.15.326.276.5.383.18.115.532.24.847.272.317.033.778-.049 1.01-.18.354-.169.87-.553 1.152-.996.29-.47.382-.847.385-.845l-.096-.182a2.25 2.25 0 0 0-.474-.56 1.27 1.27 0 0 0-.033-.022Zm-1.193-1.582v.001l.003.007c.072.195.112.36.122.52.012.184-.005.366-.052.552a1.6 1.6 0 0 1-.186.442 1.26 1.26 0 0 1-.194.238 2.01 2.01 0 0 1-.405.282 1.31 1.31 0 0 1-.528.14c-.288.008-.57-.057-.847-.122a2.43 2.43 0 0 1-.419-.156 2.81 2.81 0 0 1-.093-.045l-.168.045a12.4 12.4 0 0 0-.408.127c-.163.052-.404.134-.625.216-.19.071-.324.13-.393.162l.142.478c.072.242.124.441.168.631.045.19.08.38.08.569a1.15 1.15 0 0 1-.046.324.91.91 0 0 1-.477.617 1.31 1.31 0 0 1-.735.95l.001.001a2.2 2.2 0 0 1-.522-.08 2.56 2.56 0 0 1-.584-.22 1.75 1.75 0 0 1-.515-.417c-.14-.159-.271-.354-.404-.59a1.89 1.89 0 0 1-.234-.775 2.01 2.01 0 0 1 .05-.435c.034-.129.075-.249.123-.382.048-.114.106-.219.168-.33.043-.075.42-.728.705-1.223l.168-.291-.319-.024a5.32 5.32 0 0 1-.518-.065 2.6 2.6 0 0 1-.51-.138 1.77 1.77 0 0 1-.56-.323 1.65 1.65 0 0 1-.377-.52 1.14 1.14 0 0 1-.094-.396 1.74 1.74 0 0 1 .262-.966c.175-.287.425-.559.775-.816.349-.257.742-.48 1.152-.677a6.77 6.77 0 0 1 1.203-.45l.242-.07v-.443c0-.33-.01-.75-.022-1.039v-.002c-.012-.293-.022-.396 0-.564.023-.171.067-.328.112-.447.148-.386.458-.655.895-.686.084-.006.156.019.23.07a.59.59 0 0 1 .171.2c.059.125.1.295.133.504.066.423.085.96.088 1.42v.215c0 .208.005.332.011.46.006.127.012.235.028.333.015.1.065.278.28.278a.48.48 0 0 0 .272-.095c.178-.123.364-.225.548-.327l.006-.004c.184-.103.368-.192.513-.295l.017-.013c.146-.103.245-.206.267-.373a.62.62 0 0 0-.025-.296 2.03 2.03 0 0 0-.328-.528 8.81 8.81 0 0 0-.814-.849c-.161-.144-.34-.316-.527-.496l.001-.001a2.02 2.02 0 0 1-.328-.356.84.84 0 0 1-.112-.233.95.95 0 0 1-.044-.289.7.7 0 0 1 .128-.373 1.06 1.06 0 0 1 .541-.436c.243-.086.562-.086.979.015.161.039.335.084.524.135l.3.08c.317.085.64.18.888.244.249.063.422.109.528.09a.32.32 0 0 0 .191-.081.46.46 0 0 0 .118-.19c.01-.022.013-.032.02-.043a.55.55 0 0 0 .05-.184c.033-.21.03-.431.03-.646-.002-.214 0-.423.017-.584a1.58 1.58 0 0 1 .085-.406l.076-.182a.8.8 0 0 1 .092-.161c.023-.029.055-.058.1-.08a.28.28 0 0 1 .133-.029c.113.006.209.046.287.105.039.029.075.064.106.085a.44.44 0 0 1 .108.135c.057.118.07.22.076.302.007.083.007.145.007.198v.018c0 .333-.022.869-.022 1.339v.25c0 .17.013.317.054.45.041.13.106.241.207.323.099.08.224.137.328.162.107.025.196.016.212.01h.002c.358-.079.679-.264.97-.566a2.53 2.53 0 0 0 .511-1.241 3.3 3.3 0 0 0 .016-.524 1.82 1.82 0 0 0-.078-.465c-.188-.655-.578-1.183-1.039-1.536a1.95 1.95 0 0 0-.884-.417 1.55 1.55 0 0 0-.879.115 2.88 2.88 0 0 0-.74.538 1.76 1.76 0 0 0-.234.28 1.51 1.51 0 0 0-.193.353c-.087.212-.125.422-.142.626-.018.205-.023.4-.023.588V4.5c0 .147-.012.27-.033.38-.023.112-.059.211-.116.304a.55.55 0 0 1-.201.218.56.56 0 0 1-.292.08c-.115 0-.24-.037-.372-.076-.132-.38-.272-.088-.415-.122-.142-.033-.274-.064-.398-.09-.123-.024-.23-.044-.323-.03a.49.49 0 0 0-.256.092.57.57 0 0 0-.181.225 1.41 1.41 0 0 0-.085.332c-.017.127-.024.272-.024.429 0 .158.007.321.025.434.018.114.04.198.088.286a.9.9 0 0 0 .215.263c.111.1.26.212.441.305.18.093.39.196.616.278.128.046.426.16.644.246l.639.255-.005 1.38c0 .15.008.276.025.381.018.105.047.19.098.266.05.077.1.198.178.264a.45.45 0 0 0 .292.095c.124 0 .272-.042.45-.127.179-.085.486-.265.605-.337a1.61 1.61 0 0 0 .233-.174c.066-.061.144-.132.23-.232a.98.98 0 0 0 .16-.258.67.67 0 0 0 .051-.24.95.95 0 0 0-.059-.358c-.05-.128-.13-.28-.246-.472a7.13 7.13 0 0 0-.332-.477 12.62 12.62 0 0 0-.37-.47l-.002-.003a1.06 1.06 0 0 1-.163-.248.49.49 0 0 1-.05-.201.18.18 0 0 1 .038-.127.4.4 0 0 1 .132-.096c.061-.028.137-.044.223-.057.086-.014.178-.022.274-.033l.394-.049c.106-.013.186-.016.248-.033a.32.32 0 0 0 .184-.09.27.27 0 0 0 .068-.192.93.93 0 0 0-.03-.246 3.72 3.72 0 0 0-.093-.328 1.93 1.93 0 0 0-.116-.277 1.96 1.96 0 0 0-.234-.378 3.1 3.1 0 0 0-.428-.444c-.166-.144-.37-.3-.613-.456a3.72 3.72 0 0 0-.61-.334 1.68 1.68 0 0 0-.465-.13l-.007.055a2.88 2.88 0 0 0-.05.425c-.003.17.009.352.05.53.042.177.112.353.24.526.114.16.25.296.407.427.157.13.334.256.503.3a.91.91 0 0 0 .496.188c.196 0 .338-.115.429-.223.09-.108.155-.24.207-.386.08-.226.126-.489.126-.735 0-.246-.047-.482-.126-.683-.026-.068-.087-.216-.134-.283l-.004-.007Zm-8.56 3.95.2.093a2.77 2.77 0 0 0 .33-.452c.172-.295.316-.614.421-.932a3.2 3.2 0 0 0 .134-.998 2.01 2.01 0 0 0-.149-.789 1.57 1.57 0 0 0-.384-.617 1.61 1.61 0 0 0-.598-.407 2.2 2.2 0 0 0-1.153-.095c-.321.063-.732.203-1.087.498-.354.295-.59.663-.747 1.086-.06.164-.128.389-.179.66a4.65 4.65 0 0 0-.092.727c-.012.256-.01.54.031.88.03.338.1.746.273 1.144.144.331.343.63.645.858.302.229.7.368 1.177.38.101.004.217-.006.338-.03a2.32 2.32 0 0 0 .352-.102c.106-.04.203-.09.284-.144a.79.79 0 0 0 .172-.172.59.59 0 0 0 .082-.19.66.66 0 0 0 .022-.21.5.5 0 0 0-.323-.479 1.09 1.09 0 0 0-.311-.086 1.9 1.9 0 0 0-.323-.015 1.09 1.09 0 0 1-.38-.066c-.121-.048-.24-.118-.343-.198a1.31 1.31 0 0 1-.271-.302c-.08-.116-.146-.245-.198-.384a3.25 3.25 0 0 1-.112-.425 1.63 1.63 0 0 1-.039-.376 2.27 2.27 0 0 1 .151-.749l.22-1.012"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gold transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold transition">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-gold transition">Classic Haircut</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition">Hot Towel Shave</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition">Beard Trim & Shape</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition">Hair Coloring</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition">Deluxe Package</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} PMC Barber. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold transition mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gold transition mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
