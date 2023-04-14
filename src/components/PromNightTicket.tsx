import { QRCodeSVG } from "qrcode.react";
export const PromNightTicket = ({
	name,
	contact,
	icnum,
	qrcode,
}: {
	name: string;
	contact: string;
	icnum: string;
	qrcode: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="816"
			zoomAndPan="magnify"
			viewBox="0 0 612 197.999996"
			height="264"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
		>
			<defs>
				<g />
				<linearGradient
					x1="0"
					gradientTransform="matrix(0.75, 0, 0, 0.75, 0.00000618182, 0)"
					y1="0"
					x2="815.999966"
					gradientUnits="userSpaceOnUse"
					y2="0"
					id="10a22f5fe4"
				>
					<stop
						stopOpacity="1"
						stopColor="rgb(0%, 28.999329%, 67.799377%)"
						offset="0"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(0.309753%, 29.051208%, 67.886353%)"
						offset="0.00390625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(0.621033%, 29.104614%, 67.974854%)"
						offset="0.0078125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(0.932312%, 29.156494%, 68.061829%)"
						offset="0.0117187"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(1.243591%, 29.208374%, 68.148804%)"
						offset="0.015625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(1.553345%, 29.260254%, 68.235779%)"
						offset="0.0195312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(1.864624%, 29.31366%, 68.32428%)"
						offset="0.0234375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(2.175903%, 29.36554%, 68.411255%)"
						offset="0.0273438"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(2.487183%, 29.417419%, 68.499756%)"
						offset="0.03125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(2.796936%, 29.469299%, 68.586731%)"
						offset="0.0351562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(3.108215%, 29.522705%, 68.673706%)"
						offset="0.0390625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(3.419495%, 29.574585%, 68.760681%)"
						offset="0.0429687"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(3.730774%, 29.627991%, 68.849182%)"
						offset="0.046875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(4.040527%, 29.679871%, 68.936157%)"
						offset="0.0507812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(4.351807%, 29.73175%, 69.024658%)"
						offset="0.0546875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(4.663086%, 29.78363%, 69.111633%)"
						offset="0.0585938"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(4.974365%, 29.837036%, 69.198608%)"
						offset="0.0625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(5.284119%, 29.888916%, 69.285583%)"
						offset="0.0664062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(5.595398%, 29.940796%, 69.374084%)"
						offset="0.0703125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(5.906677%, 29.992676%, 69.46106%)"
						offset="0.0742187"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(6.217957%, 30.046082%, 69.549561%)"
						offset="0.078125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(6.529236%, 30.097961%, 69.636536%)"
						offset="0.0820312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(6.840515%, 30.151367%, 69.723511%)"
						offset="0.0859375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(7.150269%, 30.203247%, 69.810486%)"
						offset="0.0898437"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(7.461548%, 30.255127%, 69.898987%)"
						offset="0.09375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(7.772827%, 30.307007%, 69.985962%)"
						offset="0.0976562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(8.084106%, 30.360413%, 70.074463%)"
						offset="0.101562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(8.39386%, 30.412292%, 70.161438%)"
						offset="0.105469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(8.705139%, 30.464172%, 70.249939%)"
						offset="0.109375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(9.016418%, 30.516052%, 70.336914%)"
						offset="0.113281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(9.327698%, 30.569458%, 70.423889%)"
						offset="0.117188"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(9.637451%, 30.621338%, 70.510864%)"
						offset="0.121094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(9.94873%, 30.674744%, 70.599365%)"
						offset="0.125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(10.26001%, 30.726624%, 70.68634%)"
						offset="0.128906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(10.571289%, 30.778503%, 70.774841%)"
						offset="0.132812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(10.881042%, 30.830383%, 70.861816%)"
						offset="0.136719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(11.192322%, 30.883789%, 70.948792%)"
						offset="0.140625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(11.503601%, 30.935669%, 71.035767%)"
						offset="0.144531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(11.81488%, 30.987549%, 71.124268%)"
						offset="0.148437"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(12.12616%, 31.039429%, 71.211243%)"
						offset="0.152344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(12.437439%, 31.092834%, 71.299744%)"
						offset="0.15625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(12.747192%, 31.144714%, 71.386719%)"
						offset="0.160156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(13.058472%, 31.19812%, 71.473694%)"
						offset="0.164062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(13.369751%, 31.25%, 71.560669%)"
						offset="0.167969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(13.68103%, 31.30188%, 71.64917%)"
						offset="0.171875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(13.990784%, 31.35376%, 71.736145%)"
						offset="0.175781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(14.302063%, 31.407166%, 71.824646%)"
						offset="0.179687"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(14.613342%, 31.459045%, 71.911621%)"
						offset="0.183594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(14.924622%, 31.512451%, 71.998596%)"
						offset="0.1875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(15.234375%, 31.564331%, 72.085571%)"
						offset="0.191406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(15.545654%, 31.616211%, 72.174072%)"
						offset="0.195312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(15.856934%, 31.668091%, 72.261047%)"
						offset="0.199219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(16.168213%, 31.721497%, 72.349548%)"
						offset="0.203125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(16.477966%, 31.773376%, 72.436523%)"
						offset="0.207031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(16.789246%, 31.825256%, 72.523499%)"
						offset="0.210938"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(17.100525%, 31.877136%, 72.610474%)"
						offset="0.214844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(17.411804%, 31.930542%, 72.698975%)"
						offset="0.21875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(17.723083%, 31.982422%, 72.78595%)"
						offset="0.222656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(18.034363%, 32.035828%, 72.874451%)"
						offset="0.226562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(18.344116%, 32.087708%, 72.961426%)"
						offset="0.230469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(18.655396%, 32.139587%, 73.049927%)"
						offset="0.234375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(18.966675%, 32.191467%, 73.136902%)"
						offset="0.238281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(19.277954%, 32.244873%, 73.223877%)"
						offset="0.242188"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(19.587708%, 32.296753%, 73.310852%)"
						offset="0.246094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(19.898987%, 32.348633%, 73.399353%)"
						offset="0.25"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(20.210266%, 32.400513%, 73.486328%)"
						offset="0.253906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(20.521545%, 32.453918%, 73.574829%)"
						offset="0.257812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(20.831299%, 32.505798%, 73.661804%)"
						offset="0.261719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(21.142578%, 32.559204%, 73.748779%)"
						offset="0.265625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(21.453857%, 32.611084%, 73.835754%)"
						offset="0.269531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(21.765137%, 32.662964%, 73.924255%)"
						offset="0.273437"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(22.07489%, 32.714844%, 74.01123%)"
						offset="0.277344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(22.386169%, 32.76825%, 74.099731%)"
						offset="0.28125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(22.697449%, 32.820129%, 74.186707%)"
						offset="0.285156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(23.008728%, 32.872009%, 74.273682%)"
						offset="0.289062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(23.318481%, 32.923889%, 74.360657%)"
						offset="0.292969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(23.629761%, 32.977295%, 74.449158%)"
						offset="0.296875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(23.94104%, 33.029175%, 74.536133%)"
						offset="0.300781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(24.252319%, 33.082581%, 74.624634%)"
						offset="0.304687"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(24.563599%, 33.13446%, 74.711609%)"
						offset="0.308594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(24.874878%, 33.18634%, 74.798584%)"
						offset="0.3125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(25.184631%, 33.23822%, 74.885559%)"
						offset="0.316406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(25.495911%, 33.291626%, 74.97406%)"
						offset="0.320312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(25.80719%, 33.343506%, 75.061035%)"
						offset="0.324219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(26.118469%, 33.395386%, 75.149536%)"
						offset="0.328125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(26.428223%, 33.447266%, 75.236511%)"
						offset="0.332031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(26.739502%, 33.500671%, 75.323486%)"
						offset="0.335937"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(27.050781%, 33.552551%, 75.410461%)"
						offset="0.339844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(27.362061%, 33.605957%, 75.498962%)"
						offset="0.34375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(27.671814%, 33.657837%, 75.585938%)"
						offset="0.347656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(27.983093%, 33.709717%, 75.674438%)"
						offset="0.351562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(28.294373%, 33.761597%, 75.761414%)"
						offset="0.355469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(28.605652%, 33.815002%, 75.849915%)"
						offset="0.359375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(28.915405%, 33.866882%, 75.93689%)"
						offset="0.363281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(29.226685%, 33.920288%, 76.023865%)"
						offset="0.367187"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(29.537964%, 33.972168%, 76.11084%)"
						offset="0.371094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(29.849243%, 34.024048%, 76.199341%)"
						offset="0.375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(30.160522%, 34.075928%, 76.286316%)"
						offset="0.378906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(30.471802%, 34.129333%, 76.374817%)"
						offset="0.382812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(30.781555%, 34.181213%, 76.461792%)"
						offset="0.386719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(31.092834%, 34.233093%, 76.548767%)"
						offset="0.390625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(31.404114%, 34.284973%, 76.635742%)"
						offset="0.394531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(31.715393%, 34.338379%, 76.724243%)"
						offset="0.398438"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(32.025146%, 34.390259%, 76.811218%)"
						offset="0.402344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(32.336426%, 34.443665%, 76.899719%)"
						offset="0.40625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(32.647705%, 34.495544%, 76.986694%)"
						offset="0.410156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(32.958984%, 34.547424%, 77.073669%)"
						offset="0.414062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(33.268738%, 34.599304%, 77.160645%)"
						offset="0.417969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(33.580017%, 34.65271%, 77.249146%)"
						offset="0.421875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(33.891296%, 34.70459%, 77.336121%)"
						offset="0.425781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(34.202576%, 34.75647%, 77.424622%)"
						offset="0.429688"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(34.512329%, 34.80835%, 77.511597%)"
						offset="0.433594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(34.823608%, 34.861755%, 77.598572%)"
						offset="0.4375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(35.134888%, 34.913635%, 77.685547%)"
						offset="0.441406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(35.446167%, 34.967041%, 77.774048%)"
						offset="0.445312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(35.757446%, 35.018921%, 77.861023%)"
						offset="0.449219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(36.068726%, 35.070801%, 77.949524%)"
						offset="0.453125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(36.378479%, 35.122681%, 78.036499%)"
						offset="0.457031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(36.689758%, 35.176086%, 78.123474%)"
						offset="0.460938"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(37.001038%, 35.227966%, 78.210449%)"
						offset="0.464844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(37.312317%, 35.279846%, 78.29895%)"
						offset="0.46875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(37.62207%, 35.331726%, 78.385925%)"
						offset="0.472656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(37.93335%, 35.385132%, 78.474426%)"
						offset="0.476562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(38.244629%, 35.437012%, 78.561401%)"
						offset="0.480469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(38.555908%, 35.490417%, 78.649902%)"
						offset="0.484375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(38.865662%, 35.542297%, 78.736877%)"
						offset="0.488281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(39.176941%, 35.594177%, 78.823853%)"
						offset="0.492188"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(39.48822%, 35.646057%, 78.910828%)"
						offset="0.496094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(39.7995%, 35.699463%, 78.999329%)"
						offset="0.5"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(40.109253%, 35.751343%, 79.086304%)"
						offset="0.503906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(40.420532%, 35.803223%, 79.174805%)"
						offset="0.507812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(40.731812%, 35.855103%, 79.26178%)"
						offset="0.511719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(41.043091%, 35.908508%, 79.348755%)"
						offset="0.515625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(41.352844%, 35.960388%, 79.43573%)"
						offset="0.519531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(41.664124%, 36.013794%, 79.524231%)"
						offset="0.523437"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(41.975403%, 36.065674%, 79.611206%)"
						offset="0.527344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(42.286682%, 36.117554%, 79.699707%)"
						offset="0.53125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(42.597961%, 36.169434%, 79.786682%)"
						offset="0.535156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(42.909241%, 36.222839%, 79.873657%)"
						offset="0.539062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(43.218994%, 36.274719%, 79.960632%)"
						offset="0.542969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(43.530273%, 36.326599%, 80.049133%)"
						offset="0.546875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(43.841553%, 36.378479%, 80.136108%)"
						offset="0.550781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(44.152832%, 36.431885%, 80.224609%)"
						offset="0.554687"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(44.462585%, 36.483765%, 80.311584%)"
						offset="0.558594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(44.773865%, 36.53717%, 80.39856%)"
						offset="0.5625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(45.085144%, 36.58905%, 80.485535%)"
						offset="0.566406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(45.396423%, 36.64093%, 80.574036%)"
						offset="0.570312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(45.706177%, 36.69281%, 80.661011%)"
						offset="0.574219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(46.017456%, 36.746216%, 80.749512%)"
						offset="0.578125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(46.328735%, 36.798096%, 80.836487%)"
						offset="0.582031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(46.640015%, 36.851501%, 80.924988%)"
						offset="0.585937"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(46.949768%, 36.903381%, 81.011963%)"
						offset="0.589844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(47.261047%, 36.955261%, 81.098938%)"
						offset="0.59375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(47.572327%, 37.007141%, 81.185913%)"
						offset="0.597656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(47.883606%, 37.060547%, 81.274414%)"
						offset="0.601562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(48.194885%, 37.112427%, 81.361389%)"
						offset="0.605469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(48.506165%, 37.164307%, 81.44989%)"
						offset="0.609375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(48.815918%, 37.216187%, 81.536865%)"
						offset="0.613281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(49.127197%, 37.269592%, 81.62384%)"
						offset="0.617187"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(49.438477%, 37.321472%, 81.710815%)"
						offset="0.621094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(49.749756%, 37.374878%, 81.799316%)"
						offset="0.625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(50.059509%, 37.426758%, 81.886292%)"
						offset="0.628906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(50.370789%, 37.478638%, 81.974792%)"
						offset="0.632812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(50.682068%, 37.530518%, 82.061768%)"
						offset="0.636719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(50.993347%, 37.583923%, 82.148743%)"
						offset="0.640625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(51.303101%, 37.635803%, 82.235718%)"
						offset="0.644531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(51.61438%, 37.687683%, 82.324219%)"
						offset="0.648437"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(51.925659%, 37.739563%, 82.411194%)"
						offset="0.652344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(52.236938%, 37.792969%, 82.499695%)"
						offset="0.65625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(52.546692%, 37.844849%, 82.58667%)"
						offset="0.660156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(52.857971%, 37.898254%, 82.673645%)"
						offset="0.664062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(53.16925%, 37.950134%, 82.76062%)"
						offset="0.667969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(53.48053%, 38.002014%, 82.849121%)"
						offset="0.671875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(53.791809%, 38.053894%, 82.936096%)"
						offset="0.675781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(54.103088%, 38.1073%, 83.024597%)"
						offset="0.679687"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(54.412842%, 38.15918%, 83.111572%)"
						offset="0.683594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(54.724121%, 38.21106%, 83.198547%)"
						offset="0.6875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(55.0354%, 38.262939%, 83.285522%)"
						offset="0.691406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(55.34668%, 38.316345%, 83.374023%)"
						offset="0.695312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(55.656433%, 38.368225%, 83.460999%)"
						offset="0.699219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(55.967712%, 38.421631%, 83.5495%)"
						offset="0.703125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(56.278992%, 38.473511%, 83.636475%)"
						offset="0.707031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(56.590271%, 38.525391%, 83.724976%)"
						offset="0.710937"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(56.900024%, 38.577271%, 83.811951%)"
						offset="0.714844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(57.211304%, 38.630676%, 83.898926%)"
						offset="0.71875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(57.522583%, 38.682556%, 83.985901%)"
						offset="0.722656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(57.833862%, 38.734436%, 84.074402%)"
						offset="0.726562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(58.143616%, 38.786316%, 84.161377%)"
						offset="0.730469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(58.454895%, 38.839722%, 84.249878%)"
						offset="0.734375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(58.766174%, 38.891602%, 84.336853%)"
						offset="0.738281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(59.077454%, 38.945007%, 84.423828%)"
						offset="0.742187"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(59.387207%, 38.996887%, 84.510803%)"
						offset="0.746094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(59.698486%, 39.048767%, 84.599304%)"
						offset="0.75"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(60.009766%, 39.100647%, 84.686279%)"
						offset="0.753906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(60.321045%, 39.154053%, 84.77478%)"
						offset="0.757812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(60.632324%, 39.205933%, 84.861755%)"
						offset="0.761719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(60.943604%, 39.259338%, 84.94873%)"
						offset="0.765625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(61.253357%, 39.311218%, 85.035706%)"
						offset="0.769531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(61.564636%, 39.363098%, 85.124207%)"
						offset="0.773438"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(61.875916%, 39.414978%, 85.211182%)"
						offset="0.777344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(62.187195%, 39.468384%, 85.299683%)"
						offset="0.78125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(62.496948%, 39.520264%, 85.386658%)"
						offset="0.785156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(62.808228%, 39.572144%, 85.473633%)"
						offset="0.789062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(63.119507%, 39.624023%, 85.560608%)"
						offset="0.792969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(63.430786%, 39.677429%, 85.649109%)"
						offset="0.796875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(63.74054%, 39.729309%, 85.736084%)"
						offset="0.800781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(64.051819%, 39.782715%, 85.824585%)"
						offset="0.804688"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(64.363098%, 39.834595%, 85.91156%)"
						offset="0.808594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(64.674377%, 39.886475%, 85.998535%)"
						offset="0.8125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(64.984131%, 39.938354%, 86.08551%)"
						offset="0.816406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(65.29541%, 39.99176%, 86.174011%)"
						offset="0.820312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(65.606689%, 40.04364%, 86.260986%)"
						offset="0.824219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(65.917969%, 40.09552%, 86.349487%)"
						offset="0.828125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(66.229248%, 40.1474%, 86.436462%)"
						offset="0.832031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(66.540527%, 40.200806%, 86.524963%)"
						offset="0.835938"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(66.850281%, 40.252686%, 86.611938%)"
						offset="0.839844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(67.16156%, 40.306091%, 86.698914%)"
						offset="0.84375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(67.472839%, 40.357971%, 86.785889%)"
						offset="0.847656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(67.784119%, 40.409851%, 86.87439%)"
						offset="0.851562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(68.093872%, 40.461731%, 86.961365%)"
						offset="0.855469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(68.405151%, 40.515137%, 87.049866%)"
						offset="0.859375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(68.716431%, 40.567017%, 87.136841%)"
						offset="0.863281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(69.02771%, 40.618896%, 87.223816%)"
						offset="0.867188"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(69.337463%, 40.670776%, 87.310791%)"
						offset="0.871094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(69.648743%, 40.724182%, 87.399292%)"
						offset="0.875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(69.960022%, 40.776062%, 87.486267%)"
						offset="0.878906"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(70.271301%, 40.829468%, 87.574768%)"
						offset="0.882812"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(70.581055%, 40.881348%, 87.661743%)"
						offset="0.886719"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(70.892334%, 40.933228%, 87.748718%)"
						offset="0.890625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(71.203613%, 40.985107%, 87.835693%)"
						offset="0.894531"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(71.514893%, 41.038513%, 87.924194%)"
						offset="0.898438"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(71.826172%, 41.090393%, 88.011169%)"
						offset="0.902344"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(72.137451%, 41.142273%, 88.09967%)"
						offset="0.90625"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(72.447205%, 41.194153%, 88.186646%)"
						offset="0.910156"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(72.758484%, 41.247559%, 88.273621%)"
						offset="0.914062"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(73.069763%, 41.299438%, 88.360596%)"
						offset="0.917969"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(73.381042%, 41.352844%, 88.449097%)"
						offset="0.921875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(73.690796%, 41.404724%, 88.536072%)"
						offset="0.925781"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(74.002075%, 41.456604%, 88.624573%)"
						offset="0.929688"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(74.313354%, 41.508484%, 88.711548%)"
						offset="0.933594"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(74.624634%, 41.56189%, 88.798523%)"
						offset="0.9375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(74.934387%, 41.61377%, 88.885498%)"
						offset="0.941406"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(75.245667%, 41.667175%, 88.973999%)"
						offset="0.945312"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(75.556946%, 41.719055%, 89.060974%)"
						offset="0.949219"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(75.868225%, 41.770935%, 89.149475%)"
						offset="0.953125"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(76.177979%, 41.822815%, 89.23645%)"
						offset="0.957031"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(76.489258%, 41.876221%, 89.324951%)"
						offset="0.960938"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(76.800537%, 41.928101%, 89.411926%)"
						offset="0.964844"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(77.111816%, 41.97998%, 89.498901%)"
						offset="0.96875"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(77.42157%, 42.03186%, 89.585876%)"
						offset="0.972656"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(77.732849%, 42.085266%, 89.674377%)"
						offset="0.976562"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(78.044128%, 42.137146%, 89.761353%)"
						offset="0.980469"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(78.355408%, 42.190552%, 89.849854%)"
						offset="0.984375"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(78.666687%, 42.242432%, 89.936829%)"
						offset="0.988281"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(78.977966%, 42.294312%, 90.023804%)"
						offset="0.992188"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(79.28772%, 42.346191%, 90.110779%)"
						offset="0.996094"
					/>
					<stop
						stopOpacity="1"
						stopColor="rgb(79.598999%, 42.399597%, 90.19928%)"
						offset="1"
					/>
				</linearGradient>
				<clipPath id="9b5ed56dcd">
					<path
						d="M 490.777344 0 L 612 0 L 612 198 L 490.777344 198 Z M 490.777344 0 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4f57d0850b">
					<path
						d="M 6 19 L 45 19 L 45 68 L 6 68 Z M 6 19 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7c2dc45a66">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4c8cc3fd1b">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8cec5f1852">
					<path
						d="M 7 20 L 44 20 L 44 67 L 7 67 Z M 7 20 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="87f66a5de3">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f1a689a6fa">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="62048858c3">
					<path
						d="M 10 41 L 23 41 L 23 58 L 10 58 Z M 10 41 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7dc24e1bd4">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="363e5c2676">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6583c76291">
					<path
						d="M 15 24 L 34 24 L 34 63 L 15 63 Z M 15 24 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="95044839c4">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c993e830fe">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3826edbd9c">
					<path
						d="M 28 28 L 41 28 L 41 45 L 28 45 Z M 28 28 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9fe4ca647e">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1e2e4960b5">
					<path
						d="M 18.121094 19.800781 L 46.253906 30.21875 L 32.1875 68.199219 L 4.054688 57.78125 Z M 18.121094 19.800781 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c99b8e8861">
					<path
						d="M 61 71 L 109 71 L 109 128 L 61 128 Z M 61 71 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="446df3037e">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c31dd41851">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a3dc81936f">
					<path
						d="M 62 73 L 107 73 L 107 127 L 62 127 Z M 62 73 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="22e1620df3">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5d0a9de2f1">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="89617ad6ad">
					<path
						d="M 96 82 L 103 82 L 103 89 L 96 89 Z M 96 82 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="dada2a7fb2">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="23519a961e">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="52e1ac0c4c">
					<path
						d="M 66 77 L 103 77 L 103 123 L 66 123 Z M 66 77 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4b056311eb">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="619577f744">
					<path
						d="M 53.089844 89.429688 L 99.519531 66.570312 L 120.390625 108.960938 L 73.960938 131.820312 Z M 53.089844 89.429688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6a27ac7576">
					<path
						d="M 53 52 L 96 52 L 96 94 L 53 94 Z M 53 52 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5fe11a73d2">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ad5d7364c9">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5321932961">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="12043c9780">
					<path
						d="M 54 53 L 95 53 L 95 93 L 54 93 Z M 54 53 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="bb338a1b64">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="0137c5af05">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1cd60ef78e">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6c45b87ff5">
					<path
						d="M 63 63 L 91 63 L 91 89 L 63 89 Z M 63 63 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f3528e968c">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c5bc04717a">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="51a54dc130">
					<path
						d="M 53.09375 73.75 L 77.230469 52.363281 L 95.136719 72.574219 L 70.996094 93.957031 Z M 53.09375 73.75 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="96adc067ed">
					<path
						d="M 25 143 L 63 143 L 63 181 L 25 181 Z M 25 143 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="2d69be6be9">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="0ec16cd677">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6a915b2cde">
					<path
						d="M 26 144 L 62 144 L 62 180 L 26 180 Z M 26 144 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="851df284b2">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="05b969e753">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="2a265349ac">
					<path
						d="M 29 146 L 59 146 L 59 177 L 29 177 Z M 29 146 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="086d11f86b">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b8a1a79665">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="df16447e59">
					<path
						d="M 33 155 L 50 155 L 50 173 L 33 173 Z M 33 155 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="49833bb36e">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="48f370654d">
					<path
						d="M 36.230469 140.203125 L 65.550781 158.386719 L 47.367188 187.707031 L 18.046875 169.519531 Z M 36.230469 140.203125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="51519616b4">
					<path
						d="M 452 82 L 488 82 L 488 119 L 452 119 Z M 452 82 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="fd2ba5410d">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f62b7b98eb">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f49f563507">
					<path
						d="M 453 83 L 487 83 L 487 118 L 453 118 Z M 453 83 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6794dd6080">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b9fe3a74c4">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d5b1fb86ad">
					<path
						d="M 456 86 L 485 86 L 485 115 L 456 115 Z M 456 86 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9aa4ec51cb">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="232bfa2a76">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="bce298a6bd">
					<path
						d="M 465 93 L 480 93 L 480 110 L 465 110 Z M 465 93 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ce8067ccd2">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="02ae4821be">
					<path
						d="M 450.601562 91.226562 L 481.929688 80.847656 L 492.304688 112.171875 L 460.980469 122.550781 Z M 450.601562 91.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b6acba414a">
					<path
						d="M 316 48 L 343 48 L 343 89 L 316 89 Z M 316 48 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="017a8b5e13">
					<path
						d="M 323.085938 46.226562 L 351.023438 57.164062 L 338.445312 89.289062 L 310.507812 78.351562 Z M 323.085938 46.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a0e8dd561f">
					<path
						d="M 351.078125 57.183594 L 323.140625 46.246094 L 310.5625 78.371094 L 338.5 89.308594 Z M 351.078125 57.183594 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="76567eff25">
					<path
						d="M 317 50 L 342 50 L 342 88 L 317 88 Z M 317 50 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a1ef352ea6">
					<path
						d="M 323.085938 46.226562 L 351.023438 57.164062 L 338.445312 89.289062 L 310.507812 78.351562 Z M 323.085938 46.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4e6093dd09">
					<path
						d="M 351.078125 57.183594 L 323.140625 46.246094 L 310.5625 78.371094 L 338.5 89.308594 Z M 351.078125 57.183594 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="cf9f4db132">
					<path
						d="M 319 53 L 339 53 L 339 84 L 319 84 Z M 319 53 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ebf4ed7dca">
					<path
						d="M 323.085938 46.226562 L 351.023438 57.164062 L 338.445312 89.289062 L 310.507812 78.351562 Z M 323.085938 46.226562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ee387ab891">
					<path
						d="M 351.078125 57.183594 L 323.140625 46.246094 L 310.5625 78.371094 L 338.5 89.308594 Z M 351.078125 57.183594 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="da319f34b1">
					<path
						d="M 417 11 L 441 11 L 441 39 L 417 39 Z M 417 11 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ee2f5ce251">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1bc43ba69b">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="438cde5ed1">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="2082919017">
					<path
						d="M 418 11 L 441 11 L 441 38 L 418 38 Z M 418 11 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8ecad378ae">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="86ec0996b0">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3f02402f64">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="278da1145b">
					<path
						d="M 422 15 L 437 15 L 437 34 L 422 34 Z M 422 15 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="84d1c138c9">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f8f4e9d336">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ea15a47a4c">
					<path
						d="M 412.609375 16.71875 L 434.480469 6.839844 L 446.210938 32.816406 L 424.335938 42.691406 Z M 412.609375 16.71875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="38f0488af1">
					<path
						d="M 16 93 L 45 93 L 45 124 L 16 124 Z M 16 93 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="22f0326465">
					<path
						d="M 27.523438 90.109375 L 48.898438 104.019531 L 34.582031 126.019531 L 13.207031 112.113281 Z M 27.523438 90.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d9b6c48867">
					<path
						d="M 48.585938 103.8125 L 27.210938 89.90625 L 12.894531 111.90625 L 34.265625 125.816406 Z M 48.585938 103.8125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d0453d8962">
					<path
						d="M 17 94 L 44 94 L 44 123 L 17 123 Z M 17 94 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9cf6e53673">
					<path
						d="M 27.523438 90.109375 L 48.898438 104.019531 L 34.582031 126.019531 L 13.207031 112.113281 Z M 27.523438 90.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="24c855d482">
					<path
						d="M 48.585938 103.8125 L 27.210938 89.90625 L 12.894531 111.90625 L 34.265625 125.816406 Z M 48.585938 103.8125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="eb2609c176">
					<path
						d="M 19 96 L 42 96 L 42 120 L 19 120 Z M 19 96 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4888a3b904">
					<path
						d="M 27.523438 90.109375 L 48.898438 104.019531 L 34.582031 126.019531 L 13.207031 112.113281 Z M 27.523438 90.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f14d249a4c">
					<path
						d="M 48.585938 103.8125 L 27.210938 89.90625 L 12.894531 111.90625 L 34.265625 125.816406 Z M 48.585938 103.8125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="bd3bcd6694">
					<path
						d="M 111.6875 28.386719 L 152.1875 28.386719 L 152.1875 76.386719 L 111.6875 76.386719 Z M 111.6875 28.386719 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1b8d90a864">
					<path
						d="M 169.75 139.738281 L 345.15625 139.738281 L 345.15625 193.769531 L 169.75 193.769531 Z M 169.75 139.738281 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="362edadec6">
					<path
						d="M 165.535156 134.804688 L 335.40625 134.804688 L 335.40625 185.699219 L 165.535156 185.699219 Z M 165.535156 134.804688 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="bfb08d4742">
					<path
						d="M 169 150.328125 L 179 150.328125 L 179 171 L 169 171 Z M 169 150.328125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7456e76e7b">
					<path
						d="M 168.296875 150.328125 L 180.296875 150.328125 L 180.296875 171.328125 L 168.296875 171.328125 Z M 168.296875 150.328125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c36d00af7d">
					<path
						d="M 288 10 L 322 10 L 322 38 L 288 38 Z M 288 10 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7559c99be0">
					<path
						d="M 305.25 4.078125 L 326.242188 21.058594 L 306.902344 44.964844 L 285.910156 27.984375 Z M 305.25 4.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="50b2c84920">
					<path
						d="M 305.25 4.078125 L 326.242188 21.058594 L 306.902344 44.964844 L 285.910156 27.984375 Z M 305.25 4.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="070b6559b3">
					<path
						d="M 289 11 L 321 11 L 321 37 L 289 37 Z M 289 11 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6e122f724e">
					<path
						d="M 305.25 4.078125 L 326.242188 21.058594 L 306.902344 44.964844 L 285.910156 27.984375 Z M 305.25 4.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9f05c96117">
					<path
						d="M 305.25 4.078125 L 326.242188 21.058594 L 306.902344 44.964844 L 285.910156 27.984375 Z M 305.25 4.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="720499a0ad">
					<path
						d="M 291 15 L 318 15 L 318 34 L 291 34 Z M 291 15 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b3a115ccbc">
					<path
						d="M 305.25 4.078125 L 326.242188 21.058594 L 306.902344 44.964844 L 285.910156 27.984375 Z M 305.25 4.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="e5d9073efa">
					<path
						d="M 305.25 4.078125 L 326.242188 21.058594 L 306.902344 44.964844 L 285.910156 27.984375 Z M 305.25 4.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a387fd1fdc">
					<path
						d="M 357 33 L 389 33 L 389 76 L 357 76 Z M 357 33 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="38d0e1e69f">
					<path
						d="M 350.410156 40.0625 L 382.058594 30.71875 L 392.679688 66.683594 L 361.027344 76.027344 Z M 350.410156 40.0625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3c8907f984">
					<path
						d="M 350.410156 40.0625 L 382.058594 30.71875 L 392.679688 66.683594 L 361.027344 76.027344 Z M 350.410156 40.0625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3fcbcd4dec">
					<path
						d="M 358 34 L 387 34 L 387 75 L 358 75 Z M 358 34 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3903bf79fe">
					<path
						d="M 350.410156 40.0625 L 382.058594 30.71875 L 392.679688 66.683594 L 361.027344 76.027344 Z M 350.410156 40.0625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6f22a16acd">
					<path
						d="M 350.410156 40.0625 L 382.058594 30.71875 L 392.679688 66.683594 L 361.027344 76.027344 Z M 350.410156 40.0625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3bc1557a66">
					<path
						d="M 362 37 L 384 37 L 384 71 L 362 71 Z M 362 37 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="810af24fad">
					<path
						d="M 350.410156 40.0625 L 382.058594 30.71875 L 392.679688 66.683594 L 361.027344 76.027344 Z M 350.410156 40.0625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8eb05a6d62">
					<path
						d="M 350.410156 40.0625 L 382.058594 30.71875 L 392.679688 66.683594 L 361.027344 76.027344 Z M 350.410156 40.0625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5d3a546b07">
					<path
						d="M 451 2 L 485 2 L 485 44 L 451 44 Z M 451 2 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="817d69eb26">
					<path
						d="M 457.90625 2.070312 L 486.738281 6.996094 L 480.171875 45.441406 L 451.339844 40.515625 Z M 457.90625 2.070312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="76797d8bd5">
					<path
						d="M 457.90625 2.070312 L 486.738281 6.996094 L 480.171875 45.441406 L 451.339844 40.515625 Z M 457.90625 2.070312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="0c4c279e5d">
					<path
						d="M 452 3 L 484 3 L 484 43 L 452 43 Z M 452 3 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c4dada38c2">
					<path
						d="M 457.90625 2.070312 L 486.738281 6.996094 L 480.171875 45.441406 L 451.339844 40.515625 Z M 457.90625 2.070312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="30aa7d222a">
					<path
						d="M 457.90625 2.070312 L 486.738281 6.996094 L 480.171875 45.441406 L 451.339844 40.515625 Z M 457.90625 2.070312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8e64a4f07b">
					<path
						d="M 458 7 L 481 7 L 481 39 L 458 39 Z M 458 7 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d79285d430">
					<path
						d="M 457.90625 2.070312 L 486.738281 6.996094 L 480.171875 45.441406 L 451.339844 40.515625 Z M 457.90625 2.070312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="65436799e3">
					<path
						d="M 457.90625 2.070312 L 486.738281 6.996094 L 480.171875 45.441406 L 451.339844 40.515625 Z M 457.90625 2.070312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="29e82a2832">
					<path
						d="M 67 3 L 107 3 L 107 41 L 67 41 Z M 67 3 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6237314a5d">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="be9ae43c4e">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7d0439032a">
					<path
						d="M 68 4 L 106 4 L 106 40 L 68 40 Z M 68 4 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="16590b826c">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="bfd2fbfa7d">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5abf801f65">
					<path
						d="M 71 7 L 102 7 L 102 36 L 71 36 Z M 71 7 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3d563d223f">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ce25bfea84">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1779d7cac0">
					<path
						d="M 72 10 L 102 10 L 102 36 L 72 36 Z M 72 10 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5df4219309">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5dbc16bbf5">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="795022cc3e">
					<path
						d="M 75 13 L 99 13 L 99 34 L 75 34 Z M 75 13 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4e545b5f49">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="e320b0c5ae">
					<path
						d="M 61.339844 12.28125 L 95.625 -0.949219 L 106.425781 27.039062 L 72.140625 40.269531 Z M 61.339844 12.28125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="da61e5668e">
					<path
						d="M 97 138 L 122 138 L 122 180 L 97 180 Z M 97 138 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f583359f07">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ab35624ddc">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="32103eed2e">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d063319813">
					<path
						d="M 98 139 L 121 139 L 121 179 L 98 179 Z M 98 139 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ff867df785">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="05b62e1052">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a5f97be3c5">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="4ed275ac14">
					<path
						d="M 101 144 L 118 144 L 118 173 L 101 173 Z M 101 144 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="18d40297c4">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6f83451a48">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a2c2d83550">
					<path
						d="M 92.800781 153.367188 L 113.675781 138.726562 L 133.917969 167.585938 L 113.039062 182.226562 Z M 92.800781 153.367188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="991a479491">
					<path
						d="M 370 148 L 402 148 L 402 179 L 370 179 Z M 370 148 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5151429c0c">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f8399909f6">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9414a0df7c">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8b42da7d0b">
					<path
						d="M 370 149 L 402 149 L 402 179 L 370 179 Z M 370 149 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="de365bf592">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="05722672fb">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="260084d328">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6ba5a03401">
					<path
						d="M 373 152 L 398 152 L 398 176 L 373 176 Z M 373 152 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3c15ceb82d">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f92ffc6664">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="0fe05ae2e9">
					<path
						d="M 398.355469 180.539062 L 370.050781 177.214844 L 373.550781 147.417969 L 401.859375 150.742188 Z M 398.355469 180.539062 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9de306025c">
					<path
						d="M 350.65625 103.757812 L 381.40625 103.757812 L 381.40625 134.507812 L 350.65625 134.507812 Z M 350.65625 103.757812 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="19f974f1c9">
					<path
						d="M 403 44 L 441 44 L 441 93 L 403 93 Z M 403 44 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1fe9e7c9f9">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d749bb6d03">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6525ca9638">
					<path
						d="M 404 45 L 440 45 L 440 92 L 404 92 Z M 404 45 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c53ce5e424">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8d67614b89">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8bb4706dcd">
					<path
						d="M 420 70 L 433 70 L 433 89 L 420 89 Z M 420 70 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c9277e8a08">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="65f4cf455b">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7459125cce">
					<path
						d="M 408 51 L 437 51 L 437 86 L 408 86 Z M 408 51 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="a7bff18ff7">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="824d588d78">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="bab29ac48b">
					<path
						d="M 411 49 L 424 49 L 424 67 L 411 67 Z M 411 49 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="259d182153">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9f9d21d820">
					<path
						d="M 410.746094 44.285156 L 441.714844 50.050781 L 433.613281 93.550781 L 402.648438 87.785156 Z M 410.746094 44.285156 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1166176bad">
					<path
						d="M 592.199219 178.199219 L 611.699219 178.199219 L 611.699219 197.699219 L 592.199219 197.699219 Z M 592.199219 178.199219 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="34e1549e6d">
					<path
						d="M 592.199219 0.292969 L 611.699219 0.292969 L 611.699219 19.5 L 592.199219 19.5 Z M 592.199219 0.292969 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="8f64d54065">
					<path
						d="M 0.292969 178.199219 L 19.5 178.199219 L 19.5 197.699219 L 0.292969 197.699219 Z M 0.292969 178.199219 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1347139ee0">
					<path
						d="M 0.292969 0.292969 L 19.5 0.292969 L 19.5 19.5 L 0.292969 19.5 Z M 0.292969 0.292969 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="39f4de1406">
					<path
						d="M 412.023438 123.019531 L 482.523438 123.019531 L 482.523438 193.519531 L 412.023438 193.519531 Z M 412.023438 123.019531 "
						clipRule="nonzero"
					/>
				</clipPath>
				<image
					x="0"
					y="0"
					width="180"
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAIAAACyr5FlAAAABmJLR0QA/wD/AP+gvaeTAAAFcElEQVR4nO3dwW7bMBBF0brw//9yuivoxQVmMPMot7hn1aYypTQPFCMOqdevgJ+fn79/fr1e68ecXz/RMZXPkkqbE4nvccvv9Rb13zAcQoZD6H3+pXs/PnXved376+SzW2OgiUn73THT1s/RnkPIcAgZDqE3/UPlvji5t3V/v6fjJ/fjSTvd9umYytcnJj9Hew4hwyFkOIRwzHFTZfwxebbR1R0D0WcT5936HivsOYQMh5DhEIqPOSr3xclcA51ra36k287WWCQxv9NlzyFkOIQMhxCOObZ+h57UVWxdz6SetHudW7ban7RjzyFkOIQMh9DHmOOp360ncytPzadMrif9/W79HO05hAyHkOEQeqV/X/842aCecavWYfKcI3GPn8wHWc+hxxgOIcMhhDe5yf11696ceG6xNT5InOup+SxizyFkOIQMh1C7hnTr2UCitrTbfuX4yR4h6T0/utdzqlybPYeQ4RAyHEIfN5vE84CbcxPUZuKZTUW3/a1628k1nOw5hAyHkOEQeifueZX73KTNyV6cW/tndM87efaQ2K+98nV7DiHDIWQ4hEr7kCb2nKjsB9r1DXuJJmo7Es8/Kuey5xAyHEKGQ+iduG+d0nWU6XeR3KzJ+Ia6kJM9h5DhEDIcQqV6jvSa0vR6jco1kEQ9x7ftO0LH23MIGQ4hwyG0Vs8x2RfrlKgd2Wrn5vpbOm/3s5M27TmEDIeQ4RB6bT3bOKXXenTPtbXuI7EX2dbama2a05M9h5DhEDIcQqN3vN2cc0nXh261uXVMZV+QislYx55DyHAIGQ6h0phja86lIjEX073X3qxN2XpOs7X252TPIWQ4hAyHEK5bSezVsTWe2JJYy5qYb7q5n7r1HCoxHEKGQ6j9jrf0+8zSa2WfWu+aWIfS1a0XtucQMhxChkOo9I63xN7b/8p+Hjf3Zk3Uik5+dvYcQoZDyHAIvbu/l0/eeUYS+5EnxiLpPUsm9Z6uW9FVhkPIcAhhDWliPefWe1IS9R/pfbfSc0CJdTf2HEKGQ8hwCI3mVrpu7k+aqNtIvIPtpu7123MIGQ4hwyG0tifY1nORb6tRTUjMB1Xa6a65tecQMhxChkOovW7l48PNexiZ1JRMzpUeG6XfI5Oeb7LnEDIcQoZDCN/x9nHQxfWoT9VvptekUDuJdShbbdpzCBkOIcMhhHMrp0RtB/m2NbSTZyeJPccqx5PuWMSeQ8hwCBkOoffWvZZs3bPT60q644annkkkxn8+51Cb4RAyHEL4LvtTd3+I01M1m1vzJpX2ydYYYquGozvesucQMhxChkOotFb24wNL71uZ3F9v7v+d3ud00k6ixvZkzyFkOIQMh1CphrTU0MXnB9R+eoxC0mOgyXkn4xV7DiHDIWQ4hNo1pB8ffmhtSGLdSsVkjiNRq5uuQbHnEDIcQoZD6GPv88Q+YOm5ia25jO5n089RuuOGrf+r8+v2HEKGQ8hwCH2MOdJ7gG7VP3bb33rmka7l7F5P5bPOrSjCcAgZDiFcK3vqrluZ/M6dXi/61LtOtvYXmXy/3Wc59hxChkPIcAiN9j4vnSC8F9akncRcUvcaJtJzYfYcQoZDyHAIvdP3wq2aUGo/sS/W1rOWRJ0pSVy/PYeQ4RAyHEKRtbJbazS+rUa1It3mzfW09hxChkPIcAi96R+29tmk4596fwod072G9H5cp8n+sKfu9dhzCBkOIcMhhGOOLZPnGen3iWw9J/gX19E4t6IRwyFkOITiY46uSZ3mabLnGLk5dkmsJe6OUew5hAyHkOEQ+rp6jpv7olZsPUuo2Bonbf0f2nMIGQ4hwyEU2awisc935VynxJ5d6RqOm9dZYc8hZDiEDIfQH5VUHZwzRZimAAAAAElFTkSuQmCC"
					id="43c2682457"
					height="180"
					preserveAspectRatio="xMidYMid meet"
				/>
			</defs>
			<rect
				x="-61.2"
				width="734.4"
				fill="#ffffff"
				y="-19.8"
				height="237.599995"
				fillOpacity="1"
			/>
			<rect
				x="-61.2"
				width="734.4"
				fill="#ffffff"
				y="-19.8"
				height="237.599995"
				fillOpacity="1"
			/>
			<rect
				x="-61.2"
				fill="url(#10a22f5fe4)"
				width="734.4"
				y="-19.8"
				height="237.599995"
			/>
			<g clipPath="url(#9b5ed56dcd)">
				<path
					fill="#cdc2fe"
					d="M 490.777344 0 L 612.359375 0 L 612.359375 197.691406 L 490.777344 197.691406 Z M 490.777344 0 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<path
				fill="#000000"
				d="M 489.027344 198.1875 L 489.023438 194.4375 L 492.773438 194.433594 L 492.777344 198.183594 M 489.019531 190.6875 L 489.011719 186.9375 L 492.761719 186.933594 L 492.769531 190.683594 M 489.007812 183.1875 L 489.003906 179.4375 L 492.753906 179.433594 L 492.757812 183.183594 M 489 175.6875 L 488.992188 171.9375 L 492.742188 171.933594 L 492.75 175.683594 M 488.988281 168.1875 L 488.984375 164.4375 L 492.734375 164.433594 L 492.738281 168.183594 M 488.980469 160.6875 L 488.976562 156.9375 L 492.726562 156.933594 L 492.730469 160.683594 M 488.96875 153.1875 L 488.964844 149.4375 L 492.714844 149.433594 L 492.71875 153.183594 M 488.960938 145.6875 L 488.957031 141.9375 L 492.707031 141.933594 L 492.710938 145.683594 M 488.949219 138.1875 L 488.945312 134.4375 L 492.695312 134.433594 L 492.699219 138.183594 M 488.941406 130.6875 L 488.9375 126.9375 L 492.6875 126.933594 L 492.691406 130.683594 M 488.933594 123.1875 L 488.925781 119.4375 L 492.675781 119.433594 L 492.683594 123.183594 M 488.921875 115.6875 L 488.917969 111.9375 L 492.667969 111.933594 L 492.671875 115.683594 M 488.914062 108.1875 L 488.90625 104.4375 L 492.65625 104.433594 L 492.664062 108.183594 M 488.902344 100.6875 L 488.898438 96.9375 L 492.648438 96.933594 L 492.652344 100.683594 M 488.894531 93.1875 L 488.890625 89.4375 L 492.640625 89.433594 L 492.644531 93.183594 M 488.882812 85.6875 L 488.878906 81.9375 L 492.628906 81.933594 L 492.632812 85.683594 M 488.875 78.1875 L 488.871094 74.4375 L 492.621094 74.433594 L 492.625 78.183594 M 488.863281 70.6875 L 488.859375 66.9375 L 492.609375 66.933594 L 492.613281 70.683594 M 488.855469 63.1875 L 488.851562 59.4375 L 492.601562 59.433594 L 492.605469 63.183594 M 488.847656 55.6875 L 488.839844 51.9375 L 492.589844 51.933594 L 492.597656 55.683594 M 488.835938 48.1875 L 488.832031 44.4375 L 492.582031 44.433594 L 492.585938 48.183594 M 488.828125 40.6875 L 488.820312 36.9375 L 492.570312 36.933594 L 492.578125 40.683594 M 488.816406 33.1875 L 488.8125 29.4375 L 492.5625 29.433594 L 492.566406 33.183594 M 488.808594 25.6875 L 488.804688 21.9375 L 492.554688 21.933594 L 492.558594 25.683594 M 488.796875 18.1875 L 488.792969 14.4375 L 492.542969 14.433594 L 492.546875 18.183594 M 488.789062 10.6875 L 488.785156 6.9375 L 492.535156 6.933594 L 492.539062 10.683594 M 488.777344 3.1875 L 488.773438 0.1875 L 492.523438 0.183594 L 492.527344 3.183594 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<g clipPath="url(#4f57d0850b)">
				<g clipPath="url(#7c2dc45a66)">
					<g clipPath="url(#4c8cc3fd1b)">
						<path
							fill="#ffffff"
							d="M 42.761719 35.320312 L 43.800781 32.507812 L 42.398438 31.988281 L 43.441406 29.179688 L 37.75 27.070312 L 36.710938 29.882812 L 35.390625 29.390625 L 36.429688 26.582031 L 30.742188 24.476562 L 29.703125 27.285156 L 28.296875 26.765625 L 27.261719 29.570312 L 25.941406 29.078125 L 28.019531 23.464844 L 18.128906 19.804688 L 11.339844 38.132812 L 12.742188 38.652344 L 12.253906 39.972656 L 10.851562 39.453125 L 6.144531 52.160156 L 7.546875 52.679688 L 6.507812 55.492188 L 9.304688 56.527344 L 8.265625 59.339844 L 15.355469 61.964844 L 16.398438 59.15625 L 17.71875 59.644531 L 16.675781 62.453125 L 29.382812 67.160156 L 37.207031 46.027344 L 35.804688 45.507812 L 36.292969 44.1875 L 39.09375 45.222656 L 41.171875 39.609375 L 42.574219 40.128906 L 44.164062 35.839844 Z M 42.761719 35.320312 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#8cec5f1852)">
				<g clipPath="url(#87f66a5de3)">
					<g clipPath="url(#f1a689a6fa)">
						<path
							fill="#000000"
							d="M 41.746094 35.78125 L 42.78125 32.976562 L 42.777344 32.972656 L 41.378906 32.457031 L 42.421875 29.648438 L 41.015625 29.128906 L 39.613281 28.609375 L 38.210938 28.085938 L 37.171875 30.898438 L 35.773438 30.382812 L 34.371094 29.863281 L 35.414062 27.050781 L 34.007812 26.53125 L 32.613281 26.015625 L 32.605469 26.011719 L 31.210938 25.496094 L 30.167969 28.304688 L 28.765625 27.785156 L 27.726562 30.589844 L 26.324219 30.070312 L 25.285156 32.878906 L 26.6875 33.398438 L 25.648438 36.203125 L 25.644531 36.210938 L 27.050781 36.730469 L 26.011719 39.53125 L 27.40625 40.046875 L 26.367188 42.851562 L 24.972656 42.335938 L 26.011719 39.53125 L 24.609375 39.011719 L 23.203125 38.492188 L 24.246094 35.683594 L 22.851562 35.164062 L 23.886719 32.363281 L 24.925781 29.558594 L 24.929688 29.550781 L 25.96875 26.75 L 27.007812 23.9375 L 27 23.9375 L 25.605469 23.417969 L 24.203125 22.898438 L 22.796875 22.378906 L 21.402344 21.863281 L 21.394531 21.859375 L 20 21.34375 L 18.597656 20.824219 L 17.554688 23.632812 L 16.515625 26.4375 L 16.515625 26.445312 L 15.476562 29.246094 L 14.4375 32.050781 L 14.4375 32.058594 L 13.398438 34.859375 L 12.359375 37.664062 L 12.355469 37.671875 L 13.761719 38.191406 L 12.722656 40.992188 L 11.320312 40.472656 L 10.28125 43.277344 L 9.238281 46.085938 L 8.203125 48.890625 L 8.199219 48.898438 L 7.160156 51.699219 L 8.5625 52.21875 L 7.527344 55.023438 L 7.523438 55.03125 L 8.917969 55.546875 L 8.925781 55.550781 L 10.320312 56.066406 L 9.285156 58.871094 L 12.089844 59.910156 L 13.484375 60.425781 L 13.492188 60.429688 L 14.890625 60.945312 L 15.925781 58.144531 L 17.332031 58.664062 L 18.734375 59.183594 L 17.695312 61.984375 L 19.089844 62.5 L 19.097656 62.503906 L 20.496094 63.023438 L 23.300781 64.0625 L 24.695312 64.578125 L 24.703125 64.582031 L 26.101562 65.097656 L 28.90625 66.136719 L 29.945312 63.335938 L 29.945312 63.328125 L 30.984375 60.523438 L 32.023438 57.722656 L 32.027344 57.714844 L 33.0625 54.910156 L 34.105469 52.101562 L 35.144531 49.296875 L 36.183594 46.488281 L 34.78125 45.96875 L 35.820312 43.164062 L 37.222656 43.683594 L 38.617188 44.199219 L 38.625 44.203125 L 39.664062 41.402344 L 39.667969 41.394531 L 40.703125 38.589844 L 42.101562 39.105469 L 43.140625 36.296875 Z M 41.746094 35.78125 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#62048858c3)">
				<g clipPath="url(#7dc24e1bd4)">
					<g clipPath="url(#363e5c2676)">
						<path
							fill="#cdc2fe"
							d="M 21.125 44.105469 L 19.722656 43.585938 L 18.683594 46.390625 L 17.644531 49.199219 L 16.605469 52.003906 L 15.210938 51.484375 L 13.808594 50.964844 L 14.84375 48.164062 L 15.886719 45.351562 L 16.925781 42.550781 L 15.519531 42.03125 L 14.117188 41.511719 L 13.078125 44.3125 L 12.039062 47.125 L 10.996094 49.933594 L 12.402344 50.453125 L 11.363281 53.257812 L 12.765625 53.777344 L 11.726562 56.585938 L 14.53125 57.625 L 15.574219 54.816406 L 16.96875 55.332031 L 18.007812 52.53125 L 19.410156 53.050781 L 20.449219 50.238281 L 21.492188 47.429688 L 22.527344 44.625 Z M 21.125 44.105469 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#6583c76291)">
				<g clipPath="url(#95044839c4)">
					<g clipPath="url(#c993e830fe)">
						<path
							fill="#fbd502"
							d="M 23.203125 38.492188 L 22.164062 41.304688 L 20.769531 40.785156 L 20.761719 40.785156 L 19.363281 40.265625 L 15.15625 38.707031 L 16.195312 35.898438 L 17.234375 33.09375 L 17.238281 33.085938 L 18.273438 30.285156 L 19.3125 27.480469 L 19.316406 27.472656 L 20.355469 24.671875 L 23.160156 25.710938 L 22.121094 28.511719 L 22.121094 28.519531 L 21.082031 31.324219 L 20.042969 34.125 L 20.039062 34.132812 L 19.003906 36.9375 L 20.40625 37.457031 L 21.800781 37.972656 L 21.808594 37.976562 Z M 28.5 50.023438 L 29.894531 50.539062 L 29.902344 50.542969 L 31.296875 51.0625 L 32.703125 51.582031 L 33.738281 48.777344 L 32.335938 48.257812 L 30.941406 47.742188 L 30.933594 47.738281 L 29.539062 47.222656 L 28.132812 46.703125 L 26.730469 46.183594 L 25.328125 45.660156 L 24.289062 48.464844 L 23.25 51.273438 L 22.210938 54.078125 L 22.207031 54.085938 L 21.171875 56.886719 L 20.128906 59.699219 L 21.53125 60.21875 L 22.9375 60.738281 L 24.339844 61.257812 L 25.734375 61.773438 L 25.742188 61.777344 L 27.136719 62.292969 L 28.542969 62.816406 L 29.582031 60.003906 L 28.179688 59.484375 L 26.78125 58.96875 L 26.777344 58.964844 L 25.378906 58.449219 L 23.976562 57.929688 L 25.015625 55.125 L 26.417969 55.644531 L 27.8125 56.160156 L 27.820312 56.164062 L 29.214844 56.679688 L 30.621094 57.203125 L 31.660156 54.390625 L 30.257812 53.871094 L 28.863281 53.355469 L 28.855469 53.351562 L 27.457031 52.835938 L 26.054688 52.316406 L 27.097656 49.503906 Z M 28.5 50.023438 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#3826edbd9c)">
				<g clipPath="url(#9fe4ca647e)">
					<g clipPath="url(#1e2e4960b5)">
						<path
							fill="#e32935"
							d="M 38.9375 34.742188 L 39.976562 31.9375 L 37.171875 30.898438 L 36.132812 33.699219 L 34.738281 33.183594 L 33.332031 32.664062 L 34.371094 29.863281 L 32.96875 29.34375 L 31.566406 28.820312 L 30.527344 31.625 L 29.132812 31.109375 L 28.089844 33.917969 L 29.484375 34.433594 L 28.445312 37.246094 L 29.847656 37.765625 L 28.808594 40.570312 L 30.214844 41.089844 L 29.171875 43.898438 L 30.574219 44.417969 L 31.980469 44.9375 L 33.019531 42.128906 L 34.414062 42.644531 L 35.453125 39.839844 L 36.855469 40.363281 L 37.898438 37.550781 L 39.300781 38.070312 L 40.34375 35.261719 Z M 38.9375 34.742188 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#c99b8e8861)">
				<g clipPath="url(#446df3037e)">
					<g clipPath="url(#c31dd41851)">
						<path
							fill="#ffffff"
							d="M 82 127.828125 L 80.019531 123.804688 L 75.996094 125.785156 L 74.015625 121.761719 L 72.003906 122.753906 L 70.027344 118.742188 L 68.011719 119.734375 L 61.023438 105.542969 L 63.039062 104.550781 L 61.058594 100.527344 L 69.230469 96.503906 L 71.210938 100.527344 L 75.117188 98.601562 L 71.15625 90.554688 L 73.164062 89.566406 L 71.1875 85.554688 L 73.203125 84.5625 L 71.222656 80.539062 L 89.46875 71.554688 L 91.449219 75.578125 L 95.476562 73.59375 L 97.453125 77.609375 L 99.460938 76.621094 L 101.441406 80.644531 L 105.46875 78.660156 L 108.5 84.8125 L 106.484375 85.804688 L 108.464844 89.828125 L 104.445312 91.808594 L 108.402344 99.84375 L 106.386719 100.835938 L 108.363281 104.851562 L 106.347656 105.84375 L 108.328125 109.867188 L 104.300781 111.851562 L 106.28125 115.875 Z M 82 127.828125 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#a3dc81936f)">
				<g clipPath="url(#22e1620df3)">
					<g clipPath="url(#5d0a9de2f1)">
						<path
							fill="#000000"
							d="M 104.925781 80.25 L 106.90625 84.273438 L 104.894531 85.265625 L 106.875 89.289062 L 104.867188 90.277344 L 104.859375 90.28125 L 102.851562 91.269531 L 104.828125 95.28125 L 104.832031 95.292969 L 106.804688 99.296875 L 106.808594 99.304688 L 104.796875 100.296875 L 106.769531 104.3125 L 104.757812 105.304688 L 104.761719 105.3125 L 106.738281 109.324219 L 102.707031 111.308594 L 104.6875 115.332031 L 102.671875 116.324219 L 100.667969 117.3125 L 94.621094 120.289062 L 92.609375 121.28125 L 90.59375 122.273438 L 88.585938 123.261719 L 86.570312 124.253906 L 84.558594 125.246094 L 82.542969 126.238281 L 80.5625 122.214844 L 78.554688 123.203125 L 78.546875 123.207031 L 76.539062 124.195312 L 74.566406 120.179688 L 72.550781 121.171875 L 72.546875 121.164062 L 70.570312 117.148438 L 68.554688 118.140625 L 68.550781 118.132812 L 66.578125 114.128906 L 66.574219 114.117188 L 64.597656 110.105469 L 62.617188 106.082031 L 64.632812 105.089844 L 62.652344 101.066406 L 64.664062 100.074219 L 66.671875 99.085938 L 66.679688 99.082031 L 68.6875 98.09375 L 70.667969 102.117188 L 72.683594 101.125 L 74.695312 100.132812 L 76.710938 99.140625 L 74.730469 95.117188 L 72.75 91.097656 L 74.753906 90.109375 L 72.78125 86.09375 L 74.792969 85.101562 L 72.8125 81.078125 L 76.84375 79.09375 L 78.859375 78.105469 L 80.875 77.113281 L 82.878906 76.125 L 82.886719 76.121094 L 84.894531 75.132812 L 88.925781 73.148438 L 90.90625 77.171875 L 92.917969 76.179688 L 94.933594 75.1875 L 96.910156 79.199219 L 98.917969 78.210938 L 98.925781 78.207031 L 100.90625 82.230469 L 102.914062 81.242188 Z M 104.925781 80.25 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#89617ad6ad)">
				<g clipPath="url(#dada2a7fb2)">
					<g clipPath="url(#23519a961e)">
						<path
							fill="#e22835"
							d="M 96.875 84.214844 L 100.90625 82.230469 L 102.886719 86.253906 L 98.859375 88.238281 Z M 96.875 84.214844 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#52e1ac0c4c)">
				<g clipPath="url(#4b056311eb)">
					<g clipPath="url(#619577f744)">
						<path
							fill="#fbd502"
							d="M 92.882812 81.183594 L 90.90625 77.171875 L 86.875 79.15625 L 84.871094 80.140625 L 84.859375 80.148438 L 82.855469 81.132812 L 76.808594 84.109375 L 78.785156 88.125 L 76.769531 89.117188 L 78.75 93.140625 L 80.730469 97.160156 L 82.746094 96.171875 L 84.726562 100.191406 L 82.714844 101.183594 L 80.707031 102.171875 L 76.675781 104.15625 L 74.664062 105.148438 L 72.648438 106.140625 L 70.667969 102.117188 L 68.660156 103.105469 L 68.652344 103.109375 L 66.644531 104.097656 L 68.625 108.121094 L 70.601562 112.132812 L 70.609375 112.144531 L 72.578125 116.148438 L 74.585938 115.160156 L 74.59375 115.15625 L 74.609375 115.160156 L 74.589844 115.167969 L 76.570312 119.191406 L 78.585938 118.199219 L 80.5625 122.214844 L 82.578125 121.222656 L 84.589844 120.230469 L 86.605469 119.238281 L 88.613281 118.25 L 88.621094 118.246094 L 90.625 117.257812 L 98.6875 113.289062 L 100.691406 112.300781 L 100.703125 112.296875 L 102.707031 111.308594 L 100.851562 107.539062 L 100.84375 107.242188 L 102.746094 106.304688 L 100.765625 102.28125 L 100.761719 102.273438 L 102.777344 101.28125 L 100.800781 97.265625 L 98.824219 93.253906 L 96.808594 94.246094 L 94.828125 90.222656 L 98.859375 88.238281 L 96.875 84.214844 L 94.894531 80.191406 Z M 92.847656 86.199219 L 90.832031 87.191406 L 88.855469 83.175781 L 90.871094 82.183594 Z M 92.847656 86.199219 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#6a27ac7576)">
				<g clipPath="url(#5fe11a73d2)">
					<g clipPath="url(#ad5d7364c9)">
						<g clipPath="url(#5321932961)">
							<path
								fill="#ffffff"
								d="M 69.640625 64.886719 L 66.4375 67.722656 L 63.5625 64.472656 L 66.761719 61.636719 Z M 56.308594 70.898438 L 53.109375 73.734375 L 55.984375 76.980469 L 59.1875 74.144531 Z M 79.648438 61.574219 L 77.5625 63.425781 L 79.441406 65.546875 L 77.351562 67.402344 L 79.230469 69.523438 L 78.246094 70.394531 L 76.367188 68.273438 L 75.324219 69.195312 L 73.445312 67.074219 L 72.398438 68 L 70.523438 65.882812 L 67.320312 68.71875 L 69.199219 70.835938 L 68.152344 71.761719 L 70.03125 73.882812 L 68.988281 74.808594 L 70.871094 76.929688 L 69.886719 77.800781 L 68.007812 75.679688 L 65.914062 77.53125 L 64.035156 75.410156 L 61.945312 77.257812 L 60.070312 75.140625 L 56.871094 77.980469 L 71.015625 93.945312 L 84.113281 82.339844 L 95.121094 72.585938 L 80.976562 56.621094 L 77.773438 59.457031 Z M 74.011719 55.214844 L 76.890625 58.460938 L 80.089844 55.625 L 77.214844 52.378906 Z M 74.011719 55.214844 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#12043c9780)">
				<g clipPath="url(#bb338a1b64)">
					<g clipPath="url(#0137c5af05)">
						<g clipPath="url(#1cd60ef78e)">
							<path
								fill="#000000"
								d="M 57.089844 75 L 56.042969 75.925781 L 54.160156 73.804688 L 56.253906 71.953125 L 58.132812 74.074219 Z M 76.113281 54.359375 L 75.066406 55.285156 L 76.945312 57.40625 L 79.039062 55.554688 L 77.160156 53.429688 Z M 79.867188 58.597656 L 78.820312 59.523438 L 80.703125 61.648438 L 79.660156 62.570312 L 78.613281 63.496094 L 80.496094 65.617188 L 79.449219 66.546875 L 78.402344 67.472656 L 80.28125 69.59375 L 79.242188 70.515625 L 79.238281 70.519531 L 78.195312 71.445312 L 76.316406 69.320312 L 75.269531 70.25 L 73.386719 68.125 L 72.34375 69.054688 L 70.460938 66.929688 L 69.417969 67.859375 L 68.371094 68.785156 L 70.25 70.90625 L 69.203125 71.832031 L 71.085938 73.957031 L 70.039062 74.882812 L 71.917969 77.003906 L 70.875 77.925781 L 69.832031 78.855469 L 67.949219 76.730469 L 66.902344 77.660156 L 65.859375 78.585938 L 63.976562 76.464844 L 62.9375 77.386719 L 62.933594 77.390625 L 61.890625 78.3125 L 60.011719 76.191406 L 57.917969 78.042969 L 59.796875 80.167969 L 61.679688 82.289062 L 63.558594 84.410156 L 65.433594 86.527344 L 67.3125 88.652344 L 69.195312 90.773438 L 71.070312 92.890625 L 71.074219 92.894531 L 73.167969 91.042969 L 74.207031 90.117188 L 74.214844 90.113281 L 75.253906 89.191406 L 77.347656 87.339844 L 78.394531 86.410156 L 79.433594 85.488281 L 79.4375 85.484375 L 80.480469 84.5625 L 80.476562 84.558594 L 80.480469 84.5625 L 81.527344 83.636719 L 82.574219 82.707031 L 83.617188 81.78125 L 84.664062 80.855469 L 85.710938 79.925781 L 86.753906 79.003906 L 86.757812 79 L 87.800781 78.078125 L 88.84375 77.152344 L 89.890625 76.222656 L 90.9375 75.296875 L 91.980469 74.375 L 91.984375 74.371094 L 93.023438 73.449219 L 94.070312 72.519531 L 94.066406 72.515625 L 92.191406 70.398438 L 90.3125 68.277344 L 88.429688 66.15625 L 86.554688 64.039062 L 84.675781 61.914062 L 82.792969 59.792969 L 80.914062 57.671875 Z M 68.585938 64.8125 L 66.707031 62.691406 L 65.660156 63.617188 L 64.613281 64.546875 L 66.492188 66.667969 L 67.539062 65.742188 Z M 68.585938 64.8125 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#6c45b87ff5)">
				<g clipPath="url(#f3528e968c)">
					<g clipPath="url(#c5bc04717a)">
						<g clipPath="url(#51a54dc130)">
							<path
								fill="#f9b902"
								d="M 86.34375 68.003906 L 84.46875 65.886719 L 82.585938 63.765625 L 81.539062 64.691406 L 80.496094 65.617188 L 82.375 67.742188 L 80.28125 69.59375 L 82.160156 71.710938 L 81.117188 72.632812 L 81.113281 72.636719 L 80.070312 73.5625 L 78.195312 71.445312 L 76.101562 73.296875 L 74.222656 71.175781 L 72.128906 73.027344 L 74.011719 75.152344 L 71.917969 77.003906 L 73.792969 79.121094 L 72.753906 80.042969 L 71.707031 80.972656 L 69.832031 78.855469 L 67.738281 80.707031 L 65.859375 78.585938 L 64.816406 79.507812 L 64.8125 79.511719 L 63.769531 80.433594 L 65.652344 82.558594 L 67.527344 84.675781 L 71.285156 88.917969 L 72.328125 87.996094 L 72.332031 87.992188 L 73.375 87.070312 L 74.421875 86.144531 L 75.464844 85.214844 L 76.511719 84.289062 L 77.554688 83.367188 L 77.558594 83.363281 L 78.601562 82.441406 L 79.648438 81.511719 L 80.691406 80.585938 L 81.738281 79.660156 L 82.785156 78.730469 L 83.832031 77.804688 L 84.871094 76.882812 L 84.878906 76.878906 L 85.917969 75.957031 L 86.964844 75.027344 L 89.058594 73.175781 L 90.101562 72.25 L 88.222656 70.125 Z M 86.34375 68.003906 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#96adc067ed)">
				<g clipPath="url(#2d69be6be9)">
					<g clipPath="url(#0ec16cd677)">
						<path
							fill="#ffffff"
							d="M 29.492188 176.617188 L 31.070312 174.074219 L 28.523438 172.496094 L 30.097656 169.957031 L 27.558594 168.382812 L 29.136719 165.835938 L 26.59375 164.257812 L 28.171875 161.714844 L 25.632812 160.136719 L 27.207031 157.597656 L 25.933594 156.808594 L 33.082031 145.289062 L 35.625 146.867188 L 37.203125 144.328125 L 39.742188 145.902344 L 41.320312 143.355469 L 50.296875 148.925781 L 48.71875 151.46875 L 49.910156 152.207031 L 51.488281 149.664062 L 61.738281 156.019531 L 60.15625 158.566406 L 61.429688 159.355469 L 59.855469 161.894531 L 62.394531 163.46875 L 55.246094 174.992188 L 53.976562 174.203125 L 52.402344 176.742188 L 49.863281 175.164062 L 48.285156 177.710938 L 45.738281 176.132812 L 44.160156 178.675781 L 41.621094 177.101562 L 40.046875 179.640625 L 37.5 178.0625 L 35.921875 180.609375 Z M 29.492188 176.617188 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#6a915b2cde)">
				<g clipPath="url(#851df284b2)">
					<g clipPath="url(#05b969e753)">
						<path
							fill="#000000"
							d="M 60.03125 162.9375 L 58.761719 162.148438 L 60.335938 159.609375 L 59.066406 158.820312 L 60.644531 156.277344 L 58.097656 154.699219 L 56.832031 153.914062 L 55.558594 153.125 L 54.289062 152.335938 L 51.742188 150.757812 L 50.164062 153.300781 L 48.898438 152.515625 L 47.625 151.726562 L 49.203125 149.179688 L 47.929688 148.390625 L 46.660156 147.601562 L 45.386719 146.8125 L 44.121094 146.027344 L 41.574219 144.449219 L 39.996094 146.996094 L 38.722656 146.207031 L 37.457031 145.417969 L 35.882812 147.957031 L 35.878906 147.964844 L 35.882812 147.957031 L 34.609375 147.167969 L 33.339844 146.378906 L 31.757812 148.925781 L 30.179688 151.46875 L 28.605469 154.007812 L 27.027344 156.554688 L 28.300781 157.34375 L 26.726562 159.882812 L 28 160.671875 L 29.265625 161.457031 L 29.269531 161.460938 L 29.265625 161.457031 L 27.6875 164 L 28.957031 164.789062 L 30.230469 165.582031 L 30.238281 165.582031 L 30.230469 165.582031 L 28.652344 168.125 L 29.925781 168.914062 L 31.191406 169.699219 L 31.203125 169.707031 L 31.191406 169.699219 L 29.617188 172.238281 L 30.890625 173.027344 L 32.160156 173.816406 L 32.171875 173.824219 L 32.160156 173.816406 L 30.582031 176.363281 L 33.128906 177.941406 L 34.394531 178.726562 L 35.667969 179.515625 L 37.242188 176.976562 L 37.246094 176.980469 L 37.25 176.972656 L 38.519531 177.757812 L 39.789062 178.546875 L 41.363281 176.011719 L 42.636719 176.800781 L 43.902344 177.585938 L 45.484375 175.039062 L 46.753906 175.828125 L 48.027344 176.617188 L 49.605469 174.074219 L 50.878906 174.863281 L 52.144531 175.648438 L 53.71875 173.109375 L 54.992188 173.898438 L 56.570312 171.355469 L 58.144531 168.816406 L 59.722656 166.269531 L 61.300781 163.726562 Z M 60.03125 162.9375 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#2a265349ac)">
				<g clipPath="url(#086d11f86b)">
					<g clipPath="url(#b8a1a79665)">
						<path
							fill="#e5558f"
							d="M 57.492188 161.359375 L 56.21875 160.570312 L 57.792969 158.03125 L 56.519531 157.242188 L 55.25 156.453125 L 53.976562 155.664062 L 52.710938 154.878906 L 51.4375 154.089844 L 49.859375 156.636719 L 48.585938 155.847656 L 47.320312 155.058594 L 44.773438 153.480469 L 46.351562 150.9375 L 45.082031 150.148438 L 41.261719 147.78125 L 39.996094 146.996094 L 38.417969 149.539062 L 37.144531 148.75 L 35.878906 147.964844 L 34.300781 150.507812 L 32.726562 153.046875 L 31.148438 155.59375 L 29.570312 158.136719 L 30.839844 158.925781 L 29.269531 161.460938 L 31.816406 163.039062 L 30.238281 165.582031 L 31.507812 166.371094 L 32.78125 167.164062 L 31.203125 169.707031 L 33.75 171.285156 L 32.167969 173.832031 L 33.441406 174.621094 L 34.703125 175.402344 L 35.976562 176.191406 L 37.246094 176.980469 L 38.824219 174.433594 L 40.09375 175.21875 L 41.363281 176.011719 L 42.945312 173.464844 L 44.214844 174.253906 L 45.484375 175.039062 L 47.0625 172.496094 L 48.332031 173.285156 L 49.605469 174.074219 L 51.179688 171.535156 L 52.453125 172.324219 L 54.03125 169.777344 L 55.605469 167.238281 L 57.183594 164.695312 L 58.761719 162.148438 Z M 57.492188 161.359375 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#df16447e59)">
				<g clipPath="url(#49833bb36e)">
					<g clipPath="url(#48f370654d)">
						<path
							fill="#ffffff"
							d="M 40.046875 161.105469 L 38.773438 160.316406 L 40.347656 157.777344 L 41.925781 155.230469 L 44.472656 156.808594 L 42.894531 159.355469 L 41.320312 161.894531 Z M 35.921875 162.070312 L 34.65625 161.285156 L 33.082031 163.824219 L 34.347656 164.609375 L 35.621094 165.398438 L 37.195312 162.859375 Z M 46.097656 168.382812 L 44.824219 167.59375 L 43.25 170.132812 L 44.523438 170.921875 L 45.792969 171.710938 L 47.371094 169.171875 Z M 46.402344 165.046875 L 47.976562 162.507812 L 49.554688 159.964844 L 48.285156 159.175781 L 47.011719 158.386719 L 45.433594 160.929688 L 43.859375 163.46875 L 45.128906 164.257812 Z M 40.703125 168.550781 L 39.4375 167.765625 L 38.164062 166.976562 L 36.894531 166.1875 L 35.621094 165.398438 L 34.042969 167.945312 L 35.316406 168.734375 L 36.585938 169.523438 L 37.859375 170.3125 L 39.125 171.097656 L 41.671875 172.675781 L 43.25 170.132812 L 41.976562 169.339844 Z M 40.703125 168.550781 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#51519616b4)">
				<g clipPath="url(#fd2ba5410d)">
					<g clipPath="url(#f62b7b98eb)">
						<path
							fill="#ffffff"
							d="M 473.207031 118.5 L 472.304688 115.78125 L 469.585938 116.683594 L 468.6875 113.96875 L 465.976562 114.867188 L 465.074219 112.148438 L 462.355469 113.050781 L 461.457031 110.332031 L 458.742188 111.230469 L 457.84375 108.515625 L 456.484375 108.96875 L 452.40625 96.65625 L 455.125 95.753906 L 454.226562 93.042969 L 456.9375 92.144531 L 456.039062 89.425781 L 465.628906 86.246094 L 466.53125 88.964844 L 467.800781 88.542969 L 466.902344 85.824219 L 477.851562 82.199219 L 478.753906 84.917969 L 480.113281 84.464844 L 481.011719 87.179688 L 483.722656 86.28125 L 487.804688 98.589844 L 486.445312 99.042969 L 487.34375 101.753906 L 484.628906 102.652344 L 485.53125 105.371094 L 482.8125 106.273438 L 483.710938 108.992188 L 481 109.890625 L 481.898438 112.601562 L 479.179688 113.503906 L 480.082031 116.222656 Z M 473.207031 118.5 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#f49f563507)">
				<g clipPath="url(#6794dd6080)">
					<g clipPath="url(#b9fe3a74c4)">
						<path
							fill="#000000"
							d="M 481.882812 87.691406 L 480.53125 88.136719 L 479.632812 85.425781 L 478.273438 85.875 L 477.371094 83.15625 L 476.011719 83.605469 L 474.652344 84.058594 L 473.296875 84.503906 L 471.9375 84.957031 L 469.21875 85.855469 L 467.859375 86.308594 L 468.761719 89.027344 L 467.40625 89.476562 L 466.046875 89.925781 L 465.148438 87.207031 L 462.429688 88.105469 L 461.070312 88.558594 L 459.714844 89.007812 L 456.996094 89.90625 L 457.898438 92.625 L 456.539062 93.078125 L 455.183594 93.523438 L 456.082031 96.238281 L 456.085938 96.242188 L 456.082031 96.238281 L 453.363281 97.136719 L 454.265625 99.855469 L 455.167969 102.578125 L 456.066406 105.289062 L 456.964844 108.007812 L 458.324219 107.558594 L 459.222656 110.269531 L 460.582031 109.820312 L 461.9375 109.371094 L 461.941406 109.371094 L 461.9375 109.371094 L 462.835938 112.089844 L 464.199219 111.640625 L 465.558594 111.191406 L 465.5625 111.1875 L 465.558594 111.191406 L 466.457031 113.910156 L 467.816406 113.457031 L 469.171875 113.011719 L 469.183594 113.007812 L 469.171875 113.011719 L 470.070312 115.722656 L 471.429688 115.273438 L 472.800781 114.816406 L 472.789062 114.820312 L 473.6875 117.542969 L 475.046875 117.089844 L 476.410156 116.640625 L 477.761719 116.191406 L 479.121094 115.742188 L 478.222656 113.027344 L 478.230469 113.027344 L 478.226562 113.019531 L 479.578125 112.570312 L 480.9375 112.121094 L 480.039062 109.410156 L 481.398438 108.957031 L 482.753906 108.511719 L 481.851562 105.792969 L 483.210938 105.339844 L 484.570312 104.890625 L 483.671875 102.171875 L 485.03125 101.71875 L 486.382812 101.273438 L 485.484375 98.558594 L 486.84375 98.109375 L 485.941406 95.390625 L 485.042969 92.675781 L 484.144531 89.957031 L 483.242188 87.238281 Z M 481.882812 87.691406 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#d5b1fb86ad)">
				<g clipPath="url(#9aa4ec51cb)">
					<g clipPath="url(#232bfa2a76)">
						<path
							fill="#e32935"
							d="M 479.171875 88.589844 L 477.8125 89.039062 L 476.910156 86.324219 L 475.550781 86.777344 L 472.832031 87.675781 L 471.480469 88.125 L 470.121094 88.574219 L 471.023438 91.296875 L 469.660156 91.746094 L 468.308594 92.195312 L 465.589844 93.09375 L 464.6875 90.375 L 463.328125 90.828125 L 459.25 92.175781 L 457.898438 92.625 L 458.796875 95.34375 L 457.4375 95.796875 L 456.085938 96.242188 L 456.988281 98.960938 L 457.886719 101.675781 L 458.785156 104.394531 L 459.6875 107.113281 L 461.046875 106.664062 L 461.941406 109.371094 L 463.304688 108.917969 L 464.664062 108.46875 L 465.5625 111.1875 L 466.921875 110.738281 L 468.28125 110.285156 L 469.183594 113.007812 L 470.542969 112.554688 L 471.902344 112.105469 L 472.804688 114.824219 L 474.164062 114.375 L 475.507812 113.925781 L 476.867188 113.476562 L 478.230469 113.027344 L 477.328125 110.308594 L 478.679688 109.859375 L 480.039062 109.410156 L 479.140625 106.691406 L 480.5 106.238281 L 481.851562 105.792969 L 480.953125 103.070312 L 483.671875 102.171875 L 482.773438 99.457031 L 484.132812 99.007812 L 483.230469 96.289062 L 482.332031 93.574219 L 481.429688 90.855469 L 480.53125 88.136719 Z M 479.171875 88.589844 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#bce298a6bd)">
				<g clipPath="url(#ce8067ccd2)">
					<g clipPath="url(#02ae4821be)">
						<path
							fill="#ffffff"
							d="M 468.289062 101.238281 L 466.929688 101.691406 L 466.03125 98.976562 L 465.128906 96.257812 L 466.488281 95.808594 L 467.847656 95.355469 L 468.75 98.078125 L 469.648438 100.789062 Z M 466.46875 104.859375 L 465.117188 105.308594 L 466.015625 108.019531 L 467.367188 107.570312 L 468.726562 107.121094 L 467.828125 104.410156 Z M 477.339844 101.257812 L 475.980469 101.707031 L 476.878906 104.421875 L 478.238281 103.972656 L 479.597656 103.519531 L 478.699219 100.808594 Z M 475.078125 98.988281 L 474.179688 96.277344 L 473.28125 93.558594 L 470.5625 94.457031 L 471.460938 97.175781 L 472.359375 99.890625 L 473.71875 99.441406 Z M 474.160156 105.320312 L 472.808594 105.769531 L 471.449219 106.222656 L 470.085938 106.671875 L 468.726562 107.121094 L 469.628906 109.839844 L 472.347656 108.941406 L 473.707031 108.488281 L 475.0625 108.042969 L 476.421875 107.589844 L 477.78125 107.140625 L 476.878906 104.421875 Z M 474.160156 105.320312 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#b6acba414a)">
				<g clipPath="url(#017a8b5e13)">
					<g clipPath="url(#a0e8dd561f)">
						<path
							fill="#ffffff"
							d="M 319.097656 60.730469 L 320.1875 57.945312 L 321.582031 58.492188 L 322.671875 55.703125 L 324.058594 56.246094 L 325.148438 53.457031 L 326.542969 54.003906 L 327.628906 51.21875 L 329.023438 51.765625 L 330.113281 48.976562 L 339.933594 52.824219 L 337.753906 58.394531 L 339.140625 58.9375 L 335.867188 67.292969 L 340.042969 68.929688 L 338.949219 71.71875 L 341.734375 72.808594 L 340.644531 75.589844 L 342.03125 76.132812 L 340.9375 78.921875 L 342.332031 79.464844 L 340.660156 83.734375 L 339.269531 83.1875 L 338.179688 85.96875 L 336.792969 85.425781 L 335.703125 88.214844 L 323.097656 83.28125 L 324.1875 80.492188 L 322.796875 79.945312 L 323.886719 77.164062 L 322.496094 76.621094 L 323.585938 73.832031 L 316.640625 71.109375 L 317.730469 68.320312 L 316.339844 67.777344 L 317.429688 64.996094 L 316.035156 64.449219 L 317.707031 60.183594 Z M 319.097656 60.730469 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#76567eff25)">
				<g clipPath="url(#a1ef352ea6)">
					<g clipPath="url(#4e6093dd09)">
						<path
							fill="#000000"
							d="M 319.546875 61.757812 L 320.636719 58.972656 L 322.023438 59.515625 L 323.113281 56.730469 L 324.507812 57.273438 L 325.597656 54.484375 L 326.988281 55.03125 L 328.078125 52.25 L 329.472656 52.792969 L 330.5625 50.003906 L 331.953125 50.550781 L 333.347656 51.09375 L 334.734375 51.636719 L 336.125 52.183594 L 337.515625 52.726562 L 338.910156 53.273438 L 337.816406 56.0625 L 336.726562 58.84375 L 338.113281 59.386719 L 337.019531 62.175781 L 335.9375 64.964844 L 334.847656 67.746094 L 336.230469 68.289062 L 337.625 68.835938 L 339.015625 69.378906 L 337.925781 72.167969 L 339.316406 72.714844 L 340.707031 73.257812 L 339.617188 76.039062 L 341.003906 76.582031 L 339.914062 79.371094 L 341.304688 79.917969 L 340.210938 82.703125 L 338.820312 82.160156 L 337.730469 84.941406 L 337.730469 84.949219 L 336.34375 84.40625 L 335.253906 87.1875 L 333.863281 86.644531 L 332.46875 86.097656 L 331.078125 85.550781 L 329.6875 85.007812 L 328.300781 84.464844 L 328.292969 84.460938 L 326.90625 83.921875 L 324.125 82.828125 L 325.214844 80.046875 L 323.820312 79.503906 L 323.824219 79.496094 L 324.914062 76.714844 L 323.519531 76.167969 L 324.613281 73.378906 L 323.226562 72.839844 L 321.835938 72.292969 L 320.445312 71.75 L 319.050781 71.203125 L 317.660156 70.65625 L 318.75 67.871094 L 317.367188 67.328125 L 318.457031 64.546875 L 317.0625 64 L 318.15625 61.210938 Z M 319.546875 61.757812 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#cf9f4db132)">
				<g clipPath="url(#ebf4ed7dca)">
					<g clipPath="url(#ee387ab891)">
						<path
							fill="#1880d5"
							d="M 322.324219 62.84375 L 323.414062 60.0625 L 324.804688 60.605469 L 325.898438 57.820312 L 327.289062 58.363281 L 328.382812 55.574219 L 329.773438 56.121094 L 330.863281 53.339844 L 332.253906 53.882812 L 333.640625 54.425781 L 335.03125 54.972656 L 333.941406 57.753906 L 335.335938 58.296875 L 334.242188 61.085938 L 333.152344 63.875 L 332.0625 66.65625 L 332.058594 66.664062 L 330.96875 69.445312 L 332.363281 69.992188 L 333.746094 70.53125 L 335.140625 71.078125 L 336.53125 71.625 L 337.925781 72.167969 L 336.835938 74.949219 L 338.226562 75.496094 L 337.132812 78.285156 L 338.527344 78.828125 L 337.433594 81.617188 L 336.042969 81.070312 L 334.949219 83.859375 L 333.558594 83.316406 L 332.167969 82.769531 L 330.773438 82.226562 L 329.390625 81.683594 L 329.382812 81.679688 L 327.996094 81.136719 L 326.605469 80.59375 L 327.699219 77.804688 L 326.304688 77.257812 L 327.398438 74.472656 L 326.003906 73.925781 L 327.097656 71.136719 L 329.277344 65.574219 L 329.277344 65.566406 L 330.367188 62.785156 L 331.460938 59.996094 L 332.550781 57.214844 L 331.164062 56.671875 L 330.074219 59.453125 L 328.683594 58.910156 L 327.589844 61.699219 L 326.199219 61.152344 L 325.109375 63.933594 L 326.5 64.480469 L 325.410156 67.269531 L 324.015625 66.722656 L 322.925781 69.503906 L 321.535156 68.960938 L 320.144531 68.414062 L 321.234375 65.632812 L 319.839844 65.085938 L 320.933594 62.300781 Z M 322.324219 62.84375 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#da319f34b1)">
				<g clipPath="url(#ee2f5ce251)">
					<g clipPath="url(#1bc43ba69b)">
						<g clipPath="url(#438cde5ed1)">
							<path
								fill="#ffffff"
								d="M 433.820312 38.410156 L 432.089844 34.570312 L 430.195312 35.425781 L 428.460938 31.585938 L 427.511719 32.015625 L 426.644531 30.09375 L 422.855469 31.804688 L 421.988281 29.886719 L 419.148438 31.171875 L 417.820312 28.230469 L 420.660156 26.949219 L 419.796875 25.03125 L 423.585938 23.320312 L 422.71875 21.398438 L 423.667969 20.96875 L 421.933594 17.128906 L 423.828125 16.273438 L 422.09375 12.4375 L 424.996094 11.125 L 426.730469 14.964844 L 428.621094 14.109375 L 430.355469 17.949219 L 431.304688 17.519531 L 432.171875 19.441406 L 435.964844 17.730469 L 436.828125 19.648438 L 439.671875 18.363281 L 440.996094 21.304688 L 438.15625 22.585938 L 439.023438 24.503906 L 436.179688 25.789062 L 437.046875 27.710938 L 435.152344 28.566406 L 436.882812 32.40625 L 434.992188 33.261719 L 436.726562 37.097656 Z M 433.820312 38.410156 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#2082919017)">
				<g clipPath="url(#8ecad378ae)">
					<g clipPath="url(#86ec0996b0)">
						<g clipPath="url(#3f02402f64)">
							<path
								fill="#000000"
								d="M 438.449219 19.527344 L 437.503906 19.953125 L 436.554688 20.382812 L 435.691406 18.464844 L 434.742188 18.894531 L 433.796875 19.320312 L 431.898438 20.179688 L 431.03125 18.253906 L 430.082031 18.683594 L 429.21875 16.765625 L 428.347656 14.84375 L 427.40625 15.269531 L 426.457031 15.699219 L 425.589844 13.78125 L 424.722656 11.859375 L 422.824219 12.71875 L 423.695312 14.640625 L 424.558594 16.558594 L 423.617188 16.984375 L 422.667969 17.410156 L 423.535156 19.332031 L 424.398438 21.25 L 423.453125 21.679688 L 424.320312 23.601562 L 423.371094 24.03125 L 422.425781 24.457031 L 421.476562 24.882812 L 420.527344 25.3125 L 421.394531 27.230469 L 420.445312 27.65625 L 419.5 28.085938 L 418.554688 28.511719 L 419.421875 30.433594 L 420.371094 30.007812 L 421.3125 29.582031 L 422.261719 29.152344 L 423.128906 31.070312 L 425.027344 30.210938 L 425.96875 29.785156 L 426.917969 29.355469 L 427.785156 31.277344 L 428.734375 30.851562 L 429.601562 32.765625 L 430.46875 34.691406 L 431.417969 34.261719 L 432.363281 33.835938 L 433.226562 35.75 L 434.09375 37.675781 L 435.992188 36.816406 L 435.125 34.894531 L 434.257812 32.976562 L 435.207031 32.550781 L 436.152344 32.125 L 435.285156 30.203125 L 434.417969 28.285156 L 436.316406 27.425781 L 435.449219 25.503906 L 436.398438 25.078125 L 437.339844 24.652344 L 438.289062 24.222656 L 437.425781 22.304688 L 438.371094 21.875 L 439.316406 21.449219 L 440.265625 21.023438 L 439.398438 19.101562 Z M 438.449219 19.527344 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#278da1145b)">
				<g clipPath="url(#84d1c138c9)">
					<g clipPath="url(#f8f4e9d336)">
						<g clipPath="url(#ea15a47a4c)">
							<path
								fill="#fbd502"
								d="M 434.664062 21.238281 L 433.714844 21.667969 L 432.765625 22.09375 L 431.898438 20.179688 L 430.949219 20.605469 L 430.007812 21.03125 L 429.140625 19.109375 L 428.191406 19.539062 L 427.324219 17.621094 L 426.457031 15.699219 L 424.558594 16.558594 L 425.425781 18.480469 L 426.292969 20.394531 L 425.347656 20.820312 L 426.21875 22.742188 L 424.320312 23.601562 L 425.183594 25.519531 L 424.234375 25.945312 L 423.292969 26.371094 L 422.34375 26.800781 L 423.210938 28.722656 L 424.160156 28.292969 L 425.105469 27.867188 L 426.054688 27.441406 L 426.917969 29.355469 L 427.867188 28.929688 L 428.816406 28.5 L 429.683594 30.421875 L 430.628906 29.996094 L 431.492188 31.914062 L 432.363281 33.835938 L 433.308594 33.40625 L 434.257812 32.976562 L 433.390625 31.054688 L 432.527344 29.140625 L 433.472656 28.710938 L 434.417969 28.285156 L 433.550781 26.363281 L 434.5 25.933594 L 433.632812 24.015625 L 434.582031 23.589844 L 435.53125 23.160156 L 436.476562 22.734375 L 435.605469 20.8125 Z M 434.664062 21.238281 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#38f0488af1)">
				<g clipPath="url(#22f0326465)">
					<g clipPath="url(#d9b6c48867)">
						<path
							fill="#ffffff"
							d="M 25.421875 96.890625 L 26.664062 94.980469 L 28.601562 96.242188 L 29.84375 94.339844 L 31.777344 95.597656 L 33.019531 93.6875 L 39.804688 98.101562 L 40.832031 98.773438 L 44.707031 101.292969 L 43.464844 103.203125 L 44.433594 103.832031 L 40.710938 109.558594 L 43.617188 111.449219 L 37.992188 120.089844 L 37.023438 119.457031 L 35.78125 121.367188 L 33.84375 120.109375 L 32.605469 122.015625 L 31.636719 121.382812 L 30.394531 123.292969 L 28.910156 122.328125 L 26.519531 120.769531 L 25.488281 120.101562 L 16.769531 114.429688 L 18.011719 112.519531 L 17.042969 111.886719 L 18.285156 109.976562 L 17.316406 109.347656 L 18.554688 107.441406 L 17.585938 106.808594 L 18.828125 104.902344 L 17.863281 104.273438 L 23.484375 95.632812 Z M 25.421875 96.890625 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#d0453d8962)">
				<g clipPath="url(#9cf6e53673)">
					<g clipPath="url(#24c855d482)">
						<path
							fill="#000000"
							d="M 23.667969 96.472656 L 25.605469 97.730469 L 26.847656 95.820312 L 27.816406 96.453125 L 28.78125 97.082031 L 30.023438 95.175781 L 30.027344 95.179688 L 30.992188 95.808594 L 31.960938 96.4375 L 33.203125 94.527344 L 34.175781 95.160156 L 35.144531 95.789062 L 36.109375 96.417969 L 36.113281 96.421875 L 37.078125 97.050781 L 38.050781 97.679688 L 39.019531 98.3125 L 40.957031 99.570312 L 40.960938 99.574219 L 41.925781 100.203125 L 42.894531 100.832031 L 43.863281 101.464844 L 42.621094 103.375 L 43.59375 104.003906 L 42.351562 105.910156 L 42.347656 105.914062 L 41.109375 107.820312 L 39.867188 109.730469 L 40.832031 110.359375 L 40.835938 110.359375 L 41.800781 110.988281 L 42.773438 111.621094 L 41.53125 113.523438 L 41.53125 113.53125 L 40.292969 115.429688 L 40.289062 115.433594 L 39.050781 117.339844 L 39.046875 117.34375 L 37.808594 119.25 L 36.839844 118.617188 L 35.59375 120.527344 L 34.628906 119.898438 L 34.625 119.898438 L 33.660156 119.269531 L 32.421875 121.171875 L 32.417969 121.179688 L 31.449219 120.546875 L 30.207031 122.453125 L 29.238281 121.820312 L 28.269531 121.191406 L 27.304688 120.5625 L 27.296875 120.558594 L 26.332031 119.929688 L 25.363281 119.300781 L 24.394531 118.667969 L 23.421875 118.039062 L 22.457031 117.410156 L 22.453125 117.40625 L 21.488281 116.777344 L 20.519531 116.148438 L 19.546875 115.515625 L 18.578125 114.882812 L 17.613281 114.257812 L 17.609375 114.253906 L 18.847656 112.347656 L 17.882812 111.71875 L 17.886719 111.714844 L 19.125 109.8125 L 18.15625 109.179688 L 19.398438 107.269531 L 18.429688 106.640625 L 19.667969 104.734375 L 18.699219 104.101562 L 19.941406 102.191406 L 19.945312 102.195312 L 19.949219 102.191406 L 19.941406 102.1875 L 21.179688 100.289062 L 21.183594 100.285156 L 22.421875 98.378906 L 23.664062 96.46875 Z M 23.667969 96.472656 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#eb2609c176)">
				<g clipPath="url(#4888a3b904)">
					<g clipPath="url(#f14d249a4c)">
						<path
							fill="#13a34b"
							d="M 21.882812 103.449219 L 23.121094 101.550781 L 23.121094 101.546875 L 24.363281 99.640625 L 25.605469 97.730469 L 26.574219 98.363281 L 27.542969 98.992188 L 26.300781 100.902344 L 25.0625 102.808594 L 26.027344 103.4375 L 26.996094 104.066406 L 29.480469 100.253906 L 30.71875 98.347656 L 30.722656 98.34375 L 31.960938 96.4375 L 32.933594 97.070312 L 33.902344 97.699219 L 32.664062 99.605469 L 32.660156 99.609375 L 31.417969 101.515625 L 30.175781 103.425781 L 28.9375 105.328125 L 29.902344 105.957031 L 29.90625 105.960938 L 30.871094 106.589844 L 32.113281 104.683594 L 33.355469 102.773438 L 34.59375 100.867188 L 34.597656 100.863281 L 35.835938 98.960938 L 36.808594 99.589844 L 37.777344 100.222656 L 36.539062 102.125 L 36.535156 102.132812 L 35.296875 104.035156 L 34.050781 105.945312 L 32.8125 107.851562 L 34.75 109.109375 L 35.988281 107.207031 L 37.230469 105.296875 L 38.46875 103.390625 L 38.472656 103.386719 L 39.710938 101.480469 L 40.683594 102.113281 L 41.652344 102.742188 L 40.414062 104.648438 L 40.410156 104.652344 L 39.171875 106.558594 L 37.925781 108.46875 L 36.683594 110.378906 L 35.714844 109.746094 L 34.476562 111.648438 L 33.511719 111.019531 L 33.507812 111.015625 L 33.511719 111.023438 L 32.269531 112.929688 L 33.234375 113.554688 L 34.207031 114.1875 L 35.445312 112.28125 L 36.414062 112.914062 L 36.421875 112.910156 L 36.417969 112.910156 L 37.65625 111.003906 L 38.628906 111.636719 L 39.597656 112.265625 L 38.359375 114.171875 L 38.351562 114.167969 L 38.355469 114.175781 L 37.117188 116.082031 L 37.113281 116.085938 L 35.871094 117.988281 L 34.902344 117.359375 L 33.660156 119.269531 L 32.691406 118.636719 L 31.71875 118.007812 L 30.476562 119.914062 L 29.507812 119.285156 L 28.542969 118.65625 L 28.539062 118.652344 L 27.574219 118.027344 L 26.601562 117.394531 L 25.632812 116.761719 L 24.664062 116.132812 L 23.699219 115.503906 L 23.691406 115.5 L 22.726562 114.871094 L 21.757812 114.242188 L 20.789062 113.609375 L 19.816406 112.980469 L 21.0625 111.070312 L 20.089844 110.4375 L 21.332031 108.527344 L 20.367188 107.902344 L 21.609375 105.996094 L 20.636719 105.363281 L 21.878906 103.457031 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(545.399564, 170.787148)">
					<g>
						<path d="M 0 -3.523438 C 0 -5.726562 -1.398438 -7.191406 -3.5 -7.191406 C -5.59375 -7.191406 -6.992188 -5.71875 -6.992188 -3.507812 L -6.992188 -0.953125 L 0 -0.953125 Z M -6.179688 -1.847656 L -6.179688 -3.480469 C -6.179688 -5.21875 -5.105469 -6.273438 -3.480469 -6.273438 C -1.859375 -6.273438 -0.824219 -5.214844 -0.824219 -3.5 L -0.824219 -1.847656 Z M -6.179688 -1.847656 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(545.399564, 163.177182)">
					<g>
						<path d="M 0 -6.859375 L -6.992188 -3.902344 L -6.992188 -3.027344 L 0 -0.0664062 L 0 -1.035156 L -1.582031 -1.695312 L -1.582031 -5.230469 L 0 -5.890625 Z M -5.710938 -3.429688 L -5.832031 -3.460938 L -5.832031 -3.46875 L -5.710938 -3.496094 L -2.355469 -4.90625 L -2.355469 -2.019531 Z M -5.710938 -3.429688 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(545.399564, 156.255761)">
					<g>
						<path d="M 0 -3.371094 L -6.175781 -3.371094 L -6.175781 -5.589844 L -6.992188 -5.589844 L -6.992188 -0.25 L -6.175781 -0.25 L -6.175781 -2.460938 L 0 -2.460938 Z M 0 -3.371094 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(545.399564, 150.413404)">
					<g>
						<path d="M 0 -5.644531 L -0.824219 -5.644531 L -0.824219 -1.859375 L -3.167969 -1.859375 L -3.167969 -5.109375 L -3.949219 -5.109375 L -3.949219 -1.859375 L -6.164062 -1.859375 L -6.164062 -5.597656 L -6.992188 -5.597656 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -5.644531 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(578.843946, 171.150635)">
					<g>
						<path d="M 0 -1.859375 L -2.390625 -1.859375 L -2.390625 -3.839844 C -2.390625 -5.183594 -3.34375 -6.144531 -4.710938 -6.144531 C -6.03125 -6.144531 -6.992188 -5.175781 -6.992188 -3.820312 L -6.992188 -0.953125 L 0 -0.953125 Z M -6.175781 -1.859375 L -6.175781 -3.789062 C -6.175781 -4.613281 -5.507812 -5.234375 -4.703125 -5.234375 C -3.855469 -5.234375 -3.214844 -4.617188 -3.214844 -3.800781 L -3.214844 -1.859375 Z M -6.175781 -1.859375 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(578.843946, 164.799576)">
					<g>
						<path d="M 0 -5.261719 L -0.824219 -5.261719 L -0.824219 -1.859375 L -6.992188 -1.859375 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -5.261719 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(578.843946, 159.337461)">
					<g>
						<path d="M 0 -6.859375 L -6.992188 -3.902344 L -6.992188 -3.027344 L 0 -0.0664062 L 0 -1.035156 L -1.582031 -1.695312 L -1.582031 -5.230469 L 0 -5.890625 Z M -5.710938 -3.429688 L -5.832031 -3.460938 L -5.832031 -3.46875 L -5.710938 -3.496094 L -2.355469 -4.90625 L -2.355469 -2.019531 Z M -5.710938 -3.429688 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(578.843946, 152.41604)">
					<g>
						<path d="M 0.140625 -4.0625 C 0.140625 -5.554688 -0.699219 -6.988281 -2.390625 -7.335938 L -2.390625 -6.40625 C -1.265625 -6.09375 -0.703125 -5.164062 -0.703125 -4.035156 C -0.703125 -2.515625 -1.851562 -1.328125 -3.5 -1.328125 C -5.140625 -1.328125 -6.308594 -2.515625 -6.308594 -4.035156 C -6.308594 -5.167969 -5.75 -6.09375 -4.617188 -6.410156 L -4.617188 -7.335938 C -6.304688 -6.988281 -7.148438 -5.542969 -7.148438 -4.0625 C -7.148438 -2.011719 -5.539062 -0.417969 -3.5 -0.417969 C -1.480469 -0.417969 0.140625 -2.011719 0.140625 -4.0625 Z M 0.140625 -4.0625 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(578.843946, 144.662199)">
					<g>
						<path d="M 0 -5.644531 L -0.824219 -5.644531 L -0.824219 -1.859375 L -3.167969 -1.859375 L -3.167969 -5.109375 L -3.949219 -5.109375 L -3.949219 -1.859375 L -6.164062 -1.859375 L -6.164062 -5.597656 L -6.992188 -5.597656 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -5.644531 " />
					</g>
				</g>
			</g>
			<path
				strokeLinecap="butt"
				transform="matrix(-0.755598, 0.00604068, -0.00599574, -0.749976, 583.044978, 131.678063)"
				fill="none"
				strokeLinejoin="miter"
				d="M -0.00129111 0.49784 L 62.54227 0.501581 "
				stroke="#000000"
				strokeWidth="1"
				strokeOpacity="1"
				stroke-miterlimit="4"
			/>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(168.082934, 59.68054)">
					<g>
						<path d="M 13.058594 -11.453125 L 13.058594 -5.03125 L 27.988281 -5.03125 L 27.988281 -16.804688 L 7.222656 -16.804688 L 7.222656 -22.101562 L 3.476562 -22.101562 L 3.476562 -33.285156 L 7.222656 -33.285156 L 7.222656 -38.582031 L 33.820312 -38.582031 L 33.820312 -33.285156 L 37.566406 -33.285156 L 37.566406 -26.863281 L 27.988281 -26.863281 L 27.988281 -33.285156 L 13.058594 -33.285156 L 13.058594 -22.101562 L 33.820312 -22.101562 L 33.820312 -16.804688 L 37.566406 -16.804688 L 37.566406 -5.03125 L 33.820312 -5.03125 L 33.820312 0.265625 L 7.222656 0.265625 L 7.222656 -5.03125 L 3.476562 -5.03125 L 3.476562 -11.453125 Z M 13.058594 -11.453125 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(209.123368, 59.68054)">
					<g>
						<path d="M 12.253906 -38.582031 L 12.253906 -5.03125 L 16.535156 -5.03125 L 16.535156 0.265625 L 6.957031 0.265625 L 6.957031 -5.03125 L 2.675781 -5.03125 L 2.675781 -38.582031 Z M 12.253906 -38.582031 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(224.052024, 59.68054)">
					<g>
						<path d="M 24.347656 -20.441406 L 24.347656 -23.652344 L 7.171875 -23.652344 L 7.171875 -28.949219 L 29.699219 -28.949219 L 29.699219 -23.652344 L 33.925781 -23.652344 L 33.925781 -5.03125 L 29.644531 -5.03125 L 29.644531 0.265625 L 7.757812 0.265625 L 7.757812 -5.03125 L 3.476562 -5.03125 L 3.476562 -15.144531 L 7.757812 -15.144531 L 7.757812 -20.441406 Z M 24.347656 -15.144531 L 13.058594 -15.144531 L 13.058594 -5.03125 L 24.347656 -5.03125 Z M 24.347656 -15.144531 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(261.453935, 59.68054)">
					<g>
						<path d="M 33.925781 -28.949219 L 33.925781 2.996094 L 30.234375 2.996094 L 30.234375 8.292969 L 7.171875 8.292969 L 7.171875 2.996094 L 24.347656 2.996094 L 24.347656 -2.890625 L 7.222656 -2.890625 L 7.222656 -8.1875 L 3.476562 -8.1875 L 3.476562 -28.949219 L 13.058594 -28.949219 L 13.058594 -8.1875 L 24.347656 -8.1875 L 24.347656 -28.949219 Z M 33.925781 -28.949219 " />
					</g>
				</g>
			</g>
			<g fill="#43aefa" fillOpacity="1">
				<g transform="translate(167.580187, 56.103279)">
					<g>
						<path d="M 13.058594 -11.453125 L 13.058594 -5.03125 L 27.988281 -5.03125 L 27.988281 -16.804688 L 7.222656 -16.804688 L 7.222656 -22.101562 L 3.476562 -22.101562 L 3.476562 -33.285156 L 7.222656 -33.285156 L 7.222656 -38.582031 L 33.820312 -38.582031 L 33.820312 -33.285156 L 37.566406 -33.285156 L 37.566406 -26.863281 L 27.988281 -26.863281 L 27.988281 -33.285156 L 13.058594 -33.285156 L 13.058594 -22.101562 L 33.820312 -22.101562 L 33.820312 -16.804688 L 37.566406 -16.804688 L 37.566406 -5.03125 L 33.820312 -5.03125 L 33.820312 0.265625 L 7.222656 0.265625 L 7.222656 -5.03125 L 3.476562 -5.03125 L 3.476562 -11.453125 Z M 13.058594 -11.453125 " />
					</g>
				</g>
			</g>
			<g fill="#43aefa" fillOpacity="1">
				<g transform="translate(208.62062, 56.103279)">
					<g>
						<path d="M 12.253906 -38.582031 L 12.253906 -5.03125 L 16.535156 -5.03125 L 16.535156 0.265625 L 6.957031 0.265625 L 6.957031 -5.03125 L 2.675781 -5.03125 L 2.675781 -38.582031 Z M 12.253906 -38.582031 " />
					</g>
				</g>
			</g>
			<g fill="#43aefa" fillOpacity="1">
				<g transform="translate(223.549277, 56.103279)">
					<g>
						<path d="M 24.347656 -20.441406 L 24.347656 -23.652344 L 7.171875 -23.652344 L 7.171875 -28.949219 L 29.699219 -28.949219 L 29.699219 -23.652344 L 33.925781 -23.652344 L 33.925781 -5.03125 L 29.644531 -5.03125 L 29.644531 0.265625 L 7.757812 0.265625 L 7.757812 -5.03125 L 3.476562 -5.03125 L 3.476562 -15.144531 L 7.757812 -15.144531 L 7.757812 -20.441406 Z M 24.347656 -15.144531 L 13.058594 -15.144531 L 13.058594 -5.03125 L 24.347656 -5.03125 Z M 24.347656 -15.144531 " />
					</g>
				</g>
			</g>
			<g fill="#43aefa" fillOpacity="1">
				<g transform="translate(260.951188, 56.103279)">
					<g>
						<path d="M 33.925781 -28.949219 L 33.925781 2.996094 L 30.234375 2.996094 L 30.234375 8.292969 L 7.171875 8.292969 L 7.171875 2.996094 L 24.347656 2.996094 L 24.347656 -2.890625 L 7.222656 -2.890625 L 7.222656 -8.1875 L 3.476562 -8.1875 L 3.476562 -28.949219 L 13.058594 -28.949219 L 13.058594 -8.1875 L 24.347656 -8.1875 L 24.347656 -28.949219 Z M 33.925781 -28.949219 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(298.852461, 59.68054)">
					<g />
				</g>
			</g>
			<g fill="#43aefa" fillOpacity="1">
				<g transform="translate(298.349714, 56.103279)">
					<g />
				</g>
			</g>
			<g clipPath="url(#bd3bcd6694)">
				<path
					fill="#ffffff"
					d="M 129.25 76.386719 L 129.25 69.292969 L 125.742188 69.292969 L 125.742188 62.199219 L 123.984375 62.199219 L 123.984375 58.644531 L 116.964844 58.644531 L 116.964844 55.105469 L 111.703125 55.105469 L 111.703125 49.671875 L 116.964844 49.671875 L 116.964844 46.128906 L 123.984375 46.128906 L 123.984375 42.574219 L 125.742188 42.574219 L 125.742188 35.480469 L 129.25 35.480469 L 129.25 28.386719 L 134.625 28.386719 L 134.625 35.480469 L 138.132812 35.480469 L 138.132812 42.574219 L 139.890625 42.574219 L 139.890625 46.128906 L 146.910156 46.128906 L 146.910156 49.671875 L 152.171875 49.671875 L 152.171875 55.105469 L 146.910156 55.105469 L 146.910156 58.644531 L 141.648438 58.644531 L 141.648438 62.199219 L 138.132812 62.199219 L 138.132812 69.292969 L 134.625 69.292969 L 134.625 76.386719 Z M 129.25 76.386719 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<path
				fill="#000000"
				d="M 149.484375 50.609375 L 145.980469 50.609375 L 145.980469 47.070312 L 138.957031 47.070312 L 138.957031 43.515625 L 137.199219 43.515625 L 137.199219 36.421875 L 133.695312 36.421875 L 133.695312 29.328125 L 130.179688 29.328125 L 130.179688 36.421875 L 126.675781 36.421875 L 126.675781 43.515625 L 124.917969 43.515625 L 124.917969 47.070312 L 117.898438 47.070312 L 117.898438 50.609375 L 112.632812 50.609375 L 112.632812 54.164062 L 117.898438 54.164062 L 117.898438 57.707031 L 124.917969 57.707031 L 124.917969 61.257812 L 126.675781 61.257812 L 126.675781 68.351562 L 130.179688 68.351562 L 130.179688 75.445312 L 133.695312 75.445312 L 133.695312 68.351562 L 137.199219 68.351562 L 137.199219 61.257812 L 140.714844 61.257812 L 140.714844 57.707031 L 145.980469 57.707031 L 145.980469 54.164062 L 151.242188 54.164062 L 151.242188 50.609375 Z M 149.484375 50.609375 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill="#fbd502"
				d="M 142.472656 50.609375 L 138.957031 50.609375 L 138.957031 47.070312 L 135.453125 47.070312 L 135.453125 43.515625 L 133.695312 43.515625 L 133.695312 36.421875 L 130.179688 36.421875 L 130.179688 43.515625 L 128.433594 43.515625 L 128.433594 47.070312 L 124.917969 47.070312 L 124.917969 50.609375 L 119.652344 50.609375 L 119.652344 54.164062 L 124.917969 54.164062 L 124.917969 57.707031 L 128.433594 57.707031 L 128.433594 61.257812 L 130.179688 61.257812 L 130.179688 68.351562 L 133.695312 68.351562 L 133.695312 61.257812 L 137.199219 61.257812 L 137.199219 57.707031 L 138.957031 57.707031 L 138.957031 54.164062 L 144.222656 54.164062 L 144.222656 50.609375 Z M 142.472656 50.609375 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<g clipPath="url(#1b8d90a864)">
				<path
					fill="#000000"
					d="M 169.75 139.738281 L 345.164062 139.738281 L 345.164062 193.570312 L 169.75 193.570312 Z M 169.75 139.738281 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#362edadec6)">
				<path
					fill="#ffffff"
					d="M 165.535156 134.804688 L 335.378906 134.804688 L 335.378906 185.851562 L 165.535156 185.851562 Z M 165.535156 134.804688 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#bfb08d4742)">
				<path
					fill="#96cdf4"
					d="M 170.863281 151.003906 L 172.605469 150.570312 L 178.777344 151.144531 L 178.675781 154.808594 L 178.675781 157.632812 L 178.035156 157.863281 L 176.894531 159.539062 L 176.535156 160.03125 L 176.3125 161.304688 L 177.019531 162.328125 L 177.238281 162.996094 L 177.914062 163.40625 L 178.605469 163.652344 L 178.605469 170.476562 L 178.109375 170.832031 L 169.886719 170.683594 L 169.894531 167.582031 L 169.917969 165.136719 L 169.894531 164.617188 L 170.503906 163.320312 L 171.503906 162.414062 L 172.0625 161.53125 L 172.152344 160.171875 L 171.609375 159.652344 L 170.660156 158.496094 L 169.914062 157.507812 L 169.894531 151.472656 Z M 170.863281 151.003906 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#7456e76e7b)">
				<path
					fill="#0d0d0d"
					d="M 174.742188 160.03125 L 173.746094 160.03125 L 173.746094 159.046875 L 174.742188 159.046875 Z M 174.71875 168.738281 L 173.726562 168.738281 L 173.726562 167.757812 L 172.730469 167.757812 L 172.730469 168.738281 L 171.777344 168.738281 L 171.777344 169.722656 L 172.773438 169.722656 L 172.773438 168.742188 L 173.726562 168.742188 L 173.726562 169.722656 L 174.71875 169.722656 L 174.71875 168.742188 L 175.714844 168.742188 L 175.714844 169.722656 L 176.707031 169.722656 L 176.707031 168.738281 L 175.714844 168.738281 L 175.714844 167.757812 L 174.71875 167.757812 Z M 176.992188 159.839844 L 176.992188 161.816406 L 177.640625 161.816406 L 177.640625 162.609375 L 178.289062 162.609375 L 178.289062 163.398438 L 178.941406 163.398438 L 178.941406 170.109375 L 180.285156 170.109375 L 180.285156 171.328125 L 168.3125 171.328125 L 168.3125 170.109375 L 169.546875 170.109375 L 169.546875 163.398438 L 170.199219 163.398438 L 170.199219 162.609375 L 170.847656 162.609375 L 170.847656 161.816406 L 171.496094 161.816406 L 171.496094 159.839844 L 170.847656 159.839844 L 170.847656 159.046875 L 170.199219 159.046875 L 170.199219 158.253906 L 169.546875 158.253906 L 169.546875 151.546875 L 168.3125 151.546875 L 168.3125 150.328125 L 180.285156 150.328125 L 180.285156 151.546875 L 178.941406 151.546875 L 178.941406 158.253906 L 178.289062 158.253906 L 178.289062 159.046875 L 177.640625 159.046875 L 177.640625 159.839844 Z M 175.691406 161.816406 L 175.691406 159.839844 L 176.34375 159.839844 L 176.34375 159.046875 L 176.992188 159.046875 L 176.992188 158.253906 L 177.640625 158.253906 L 177.640625 157.464844 L 178.289062 157.464844 L 178.289062 151.546875 L 170.199219 151.546875 L 170.199219 157.464844 L 170.847656 157.464844 L 170.847656 158.253906 L 171.496094 158.253906 L 171.496094 159.046875 L 172.144531 159.046875 L 172.144531 159.839844 L 172.796875 159.839844 L 172.796875 161.816406 L 172.144531 161.816406 L 172.144531 162.609375 L 171.496094 162.609375 L 171.496094 163.398438 L 170.847656 163.398438 L 170.847656 164.191406 L 170.199219 164.191406 L 170.199219 170.109375 L 178.289062 170.109375 L 178.289062 164.191406 L 177.640625 164.191406 L 177.640625 163.398438 L 176.992188 163.398438 L 176.992188 162.609375 L 176.34375 162.609375 L 176.34375 161.816406 Z M 175.734375 154.996094 L 176.730469 154.996094 L 176.730469 154.011719 L 175.734375 154.011719 L 175.734375 154.992188 L 174.742188 154.992188 L 174.742188 154.011719 L 173.746094 154.011719 L 173.746094 154.992188 L 172.796875 154.992188 L 172.796875 154.011719 L 171.800781 154.011719 L 171.800781 154.996094 L 172.753906 154.996094 L 172.753906 155.976562 L 173.746094 155.976562 L 173.746094 154.996094 L 174.742188 154.996094 L 174.742188 155.976562 L 175.734375 155.976562 Z M 173.746094 156.960938 L 174.742188 156.960938 L 174.742188 155.976562 L 173.746094 155.976562 Z M 173.746094 156.960938 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#c36d00af7d)">
				<g clipPath="url(#7559c99be0)">
					<g clipPath="url(#50b2c84920)">
						<path
							fill="#ffffff"
							d="M 316.796875 30.566406 L 318.472656 28.496094 L 317.425781 27.648438 L 319.105469 25.574219 L 318.0625 24.730469 L 319.742188 22.65625 L 318.695312 21.808594 L 320.371094 19.738281 L 319.324219 18.894531 L 321.003906 16.820312 L 313.621094 10.847656 L 310.269531 14.996094 L 309.226562 14.152344 L 304.195312 20.371094 L 301.058594 17.835938 L 299.378906 19.910156 L 297.289062 18.21875 L 295.613281 20.289062 L 294.570312 19.445312 L 292.894531 21.519531 L 291.847656 20.675781 L 289.277344 23.847656 L 290.324219 24.695312 L 288.648438 26.765625 L 289.691406 27.609375 L 288.011719 29.683594 L 297.484375 37.34375 L 299.164062 35.269531 L 300.210938 36.117188 L 301.882812 34.046875 L 302.929688 34.890625 L 304.609375 32.816406 L 309.828125 37.039062 L 311.507812 34.964844 L 312.554688 35.8125 L 314.226562 33.742188 L 315.273438 34.585938 L 317.84375 31.410156 Z M 316.796875 30.566406 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#070b6559b3)">
				<g clipPath="url(#6e122f724e)">
					<g clipPath="url(#9f05c96117)">
						<path
							fill="#000000"
							d="M 315.796875 30.667969 L 317.472656 28.597656 L 316.429688 27.753906 L 318.109375 25.679688 L 317.0625 24.832031 L 318.742188 22.757812 L 317.695312 21.910156 L 319.371094 19.839844 L 318.324219 18.996094 L 320.003906 16.921875 L 317.910156 15.226562 L 316.871094 14.386719 L 315.824219 13.539062 L 314.777344 12.695312 L 313.734375 11.847656 L 312.054688 13.921875 L 310.378906 15.992188 L 309.339844 15.152344 L 307.660156 17.226562 L 305.976562 19.296875 L 304.300781 21.367188 L 303.261719 20.523438 L 302.214844 19.679688 L 301.167969 18.832031 L 299.488281 20.90625 L 298.441406 20.0625 L 297.398438 19.214844 L 295.722656 21.285156 L 294.679688 20.445312 L 293.003906 22.519531 L 291.957031 21.671875 L 290.277344 23.75 L 291.324219 24.59375 L 289.648438 26.664062 L 289.644531 26.667969 L 290.6875 27.511719 L 289.011719 29.582031 L 290.058594 30.429688 L 291.105469 31.273438 L 292.148438 32.121094 L 293.195312 32.964844 L 294.238281 33.808594 L 294.242188 33.8125 L 295.28125 34.65625 L 296.328125 35.5 L 297.375 36.347656 L 299.050781 34.277344 L 300.097656 35.121094 L 300.097656 35.117188 L 301.773438 33.046875 L 302.820312 33.894531 L 304.5 31.820312 L 305.539062 32.660156 L 306.585938 33.507812 L 307.632812 34.351562 L 308.679688 35.199219 L 309.722656 36.046875 L 311.402344 33.96875 L 312.445312 34.8125 L 314.117188 32.742188 L 315.164062 33.589844 L 316.84375 31.511719 Z M 315.796875 30.667969 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#720499a0ad)">
				<g clipPath="url(#b3a115ccbc)">
					<g clipPath="url(#e5d9073efa)">
						<path
							fill="#e24f95"
							d="M 313.710938 28.980469 L 315.386719 26.910156 L 314.339844 26.0625 L 316.019531 23.988281 L 314.972656 23.140625 L 316.648438 21.066406 L 315.605469 20.21875 L 317.277344 18.148438 L 315.191406 16.460938 L 314.144531 15.613281 L 312.472656 17.683594 L 311.425781 16.839844 L 308.066406 20.988281 L 306.394531 23.058594 L 306.390625 23.0625 L 304.714844 25.136719 L 303.667969 24.289062 L 302.628906 23.445312 L 301.582031 22.601562 L 299.488281 20.90625 L 297.816406 22.976562 L 296.769531 22.132812 L 295.089844 24.207031 L 294.042969 23.359375 L 292.363281 25.4375 L 293.410156 26.28125 L 291.734375 28.359375 L 292.777344 29.203125 L 293.824219 30.050781 L 294.871094 30.894531 L 295.910156 31.738281 L 295.917969 31.742188 L 296.957031 32.585938 L 298.003906 33.429688 L 299.683594 31.355469 L 300.726562 32.203125 L 302.40625 30.125 L 303.453125 30.972656 L 305.132812 28.898438 L 306.804688 26.828125 L 308.480469 24.757812 L 308.484375 24.75 L 310.160156 22.679688 L 311.839844 20.605469 L 313.511719 18.535156 L 314.554688 19.378906 L 312.878906 21.449219 L 313.925781 22.292969 L 312.246094 24.371094 L 313.292969 25.214844 L 311.617188 27.285156 L 310.570312 26.441406 L 308.894531 28.515625 L 309.941406 29.363281 L 308.265625 31.433594 L 309.3125 32.277344 L 310.355469 33.125 L 312.03125 31.054688 L 313.078125 31.898438 L 314.757812 29.824219 Z M 313.710938 28.980469 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#a387fd1fdc)">
				<g clipPath="url(#38d0e1e69f)">
					<g clipPath="url(#3c8907f984)">
						<path
							fill="#ffffff"
							d="M 385.066406 46.78125 L 384.144531 43.667969 L 382.570312 44.132812 L 381.648438 41.011719 L 380.078125 41.476562 L 379.15625 38.355469 L 377.578125 38.820312 L 376.65625 35.707031 L 375.082031 36.171875 L 374.160156 33.050781 L 363.03125 36.335938 L 364.871094 42.570312 L 363.300781 43.035156 L 366.066406 52.394531 L 361.335938 53.792969 L 362.257812 56.914062 L 359.101562 57.84375 L 360.023438 60.957031 L 358.453125 61.421875 L 359.375 64.542969 L 357.796875 65.011719 L 359.207031 69.785156 L 360.785156 69.320312 L 361.703125 72.433594 L 363.273438 71.972656 L 364.195312 75.09375 L 378.476562 70.875 L 377.554688 67.753906 L 379.132812 67.289062 L 378.214844 64.171875 L 379.789062 63.707031 L 378.867188 60.585938 L 386.742188 58.261719 L 385.820312 55.140625 L 387.394531 54.671875 L 386.476562 51.558594 L 388.054688 51.09375 L 386.644531 46.316406 Z M 385.066406 46.78125 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#3fcbcd4dec)">
				<g clipPath="url(#3903bf79fe)">
					<g clipPath="url(#6f22a16acd)">
						<path
							fill="#000000"
							d="M 384.472656 47.855469 L 383.554688 44.742188 L 381.984375 45.207031 L 381.0625 42.085938 L 379.484375 42.550781 L 378.5625 39.429688 L 376.984375 39.894531 L 376.066406 36.78125 L 374.488281 37.246094 L 373.566406 34.125 L 371.988281 34.589844 L 370.414062 35.054688 L 368.84375 35.519531 L 365.6875 36.449219 L 364.109375 36.917969 L 365.03125 40.039062 L 365.953125 43.152344 L 364.382812 43.617188 L 365.304688 46.738281 L 366.21875 49.863281 L 367.140625 52.976562 L 365.570312 53.441406 L 362.414062 54.371094 L 363.335938 57.492188 L 361.757812 57.957031 L 360.183594 58.425781 L 361.101562 61.539062 L 359.53125 62.003906 L 360.453125 65.125 L 358.875 65.589844 L 359.796875 68.710938 L 361.375 68.246094 L 362.296875 71.359375 L 362.296875 71.367188 L 363.867188 70.90625 L 364.789062 74.019531 L 366.363281 73.554688 L 367.941406 73.085938 L 371.097656 72.15625 L 372.667969 71.691406 L 372.671875 71.691406 L 374.242188 71.226562 L 375.820312 70.761719 L 377.398438 70.292969 L 376.476562 67.179688 L 378.054688 66.714844 L 378.054688 66.707031 L 377.132812 63.59375 L 378.710938 63.128906 L 377.789062 60.003906 L 379.359375 59.542969 L 380.9375 59.074219 L 382.511719 58.609375 L 385.667969 57.679688 L 384.746094 54.558594 L 386.316406 54.09375 L 385.394531 50.980469 L 386.972656 50.511719 L 386.050781 47.390625 Z M 384.472656 47.855469 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#3bc1557a66)">
				<g clipPath="url(#810af24fad)">
					<g clipPath="url(#8eb05a6d62)">
						<path
							fill="#e32935"
							d="M 381.328125 48.785156 L 380.40625 45.671875 L 378.828125 46.136719 L 377.90625 43.015625 L 376.332031 43.480469 L 375.410156 40.359375 L 373.832031 40.824219 L 372.910156 37.710938 L 371.335938 38.175781 L 369.765625 38.640625 L 368.1875 39.105469 L 369.105469 42.222656 L 367.53125 42.6875 L 369.375 48.929688 L 370.292969 52.042969 L 370.296875 52.050781 L 371.214844 55.167969 L 369.636719 55.632812 L 368.066406 56.097656 L 366.492188 56.5625 L 363.335938 57.492188 L 364.257812 60.609375 L 362.679688 61.074219 L 363.601562 64.195312 L 362.023438 64.660156 L 362.945312 67.78125 L 364.523438 67.316406 L 365.445312 70.4375 L 367.023438 69.972656 L 368.597656 69.507812 L 370.175781 69.042969 L 371.746094 68.578125 L 371.753906 68.574219 L 373.324219 68.113281 L 374.902344 67.644531 L 373.980469 64.523438 L 375.554688 64.058594 L 374.632812 60.9375 L 376.210938 60.472656 L 375.289062 57.347656 L 374.371094 54.234375 L 373.449219 51.121094 L 373.449219 51.113281 L 372.527344 48 L 371.605469 44.875 L 370.6875 41.761719 L 372.257812 41.296875 L 373.175781 44.414062 L 374.753906 43.949219 L 375.675781 47.070312 L 377.253906 46.601562 L 378.171875 49.71875 L 376.59375 50.183594 L 377.515625 53.304688 L 379.09375 52.839844 L 380.015625 55.953125 L 381.589844 55.488281 L 383.167969 55.023438 L 382.25 51.90625 L 383.824219 51.441406 L 382.902344 48.320312 Z M 381.328125 48.785156 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#5d3a546b07)">
				<g clipPath="url(#817d69eb26)">
					<g clipPath="url(#76797d8bd5)">
						<path
							fill="#ffffff"
							d="M 484.449219 20.335938 L 482.757812 20.046875 L 483.335938 16.710938 L 479.957031 16.132812 L 480.523438 12.796875 L 477.144531 12.21875 L 477.710938 8.890625 L 472.648438 8.023438 L 473.21875 4.6875 L 457.914062 2.074219 L 457.042969 7.171875 L 458.734375 7.460938 L 458.164062 10.796875 L 461.539062 11.371094 L 460.96875 14.710938 L 462.660156 15 L 462.089844 18.328125 L 463.78125 18.617188 L 462.375 26.859375 L 460.683594 26.570312 L 460.113281 29.898438 L 458.421875 29.609375 L 457.851562 32.945312 L 454.480469 32.371094 L 453.910156 35.707031 L 452.21875 35.417969 L 451.347656 40.515625 L 466.648438 43.128906 L 467.21875 39.792969 L 472.285156 40.660156 L 472.855469 37.328125 L 476.234375 37.90625 L 476.804688 34.570312 L 480.1875 35.148438 L 480.75 31.808594 L 482.441406 32.097656 Z M 484.449219 20.335938 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#0c4c279e5d)">
				<g clipPath="url(#c4dada38c2)">
					<g clipPath="url(#30aa7d222a)">
						<path
							fill="#000000"
							d="M 483.402344 21.066406 L 481.71875 20.777344 L 481.710938 20.777344 L 482.289062 17.441406 L 478.90625 16.863281 L 479.476562 13.527344 L 477.789062 13.238281 L 476.105469 12.949219 L 476.671875 9.621094 L 476.664062 9.621094 L 474.980469 9.332031 L 473.292969 9.042969 L 471.601562 8.753906 L 472.171875 5.417969 L 470.480469 5.128906 L 468.796875 4.84375 L 468.789062 4.839844 L 467.105469 4.554688 L 463.722656 3.976562 L 462.042969 3.6875 L 462.035156 3.6875 L 460.351562 3.398438 L 458.660156 3.109375 L 458.089844 6.445312 L 459.78125 6.734375 L 459.210938 10.066406 L 459.210938 10.074219 L 460.894531 10.359375 L 460.902344 10.363281 L 462.585938 10.648438 L 462.015625 13.976562 L 463.707031 14.265625 L 463.136719 17.605469 L 464.820312 17.890625 L 464.828125 17.894531 L 464.257812 21.222656 L 464.257812 21.230469 L 463.972656 22.890625 L 463.6875 24.558594 L 463.121094 27.886719 L 463.113281 27.886719 L 461.429688 27.597656 L 460.859375 30.9375 L 459.167969 30.648438 L 458.597656 33.984375 L 456.914062 33.695312 L 456.90625 33.695312 L 455.222656 33.40625 L 454.65625 36.738281 L 452.964844 36.449219 L 452.394531 39.785156 L 454.085938 40.074219 L 455.769531 40.359375 L 455.777344 40.363281 L 457.457031 40.648438 L 460.839844 41.226562 L 462.523438 41.515625 L 462.53125 41.515625 L 464.214844 41.804688 L 465.90625 42.09375 L 466.472656 38.765625 L 468.164062 39.050781 L 468.164062 39.042969 L 468.164062 39.050781 L 471.546875 39.628906 L 472.117188 36.292969 L 473.800781 36.582031 L 475.492188 36.871094 L 476.058594 33.53125 L 479.441406 34.109375 L 480.003906 30.78125 L 480.011719 30.78125 L 481.695312 31.070312 L 482.265625 27.730469 L 482.550781 26.0625 L 482.832031 24.402344 L 482.835938 24.394531 Z M 483.402344 21.066406 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#8e64a4f07b)">
				<g clipPath="url(#d79285d430)">
					<g clipPath="url(#65436799e3)">
						<path
							fill="#ffffff"
							d="M 478.339844 20.199219 L 478.90625 16.863281 L 477.21875 16.574219 L 475.535156 16.289062 L 476.105469 12.949219 L 474.414062 12.660156 L 472.722656 12.375 L 471.03125 12.085938 L 471.601562 8.753906 L 469.910156 8.464844 L 468.226562 8.179688 L 468.21875 8.175781 L 466.535156 7.890625 L 464.84375 7.601562 L 463.15625 7.3125 L 462.585938 10.648438 L 464.273438 10.9375 L 465.964844 11.226562 L 465.398438 14.554688 L 467.082031 14.84375 L 466.511719 18.179688 L 468.199219 18.46875 L 467.632812 21.796875 L 467.632812 21.804688 L 467.347656 23.464844 L 467.0625 25.136719 L 466.492188 28.464844 L 464.800781 28.175781 L 464.230469 31.511719 L 462.550781 31.226562 L 461.980469 34.5625 L 458.597656 33.984375 L 458.027344 37.320312 L 461.410156 37.898438 L 463.09375 38.1875 L 463.101562 38.1875 L 464.78125 38.476562 L 466.472656 38.765625 L 467.042969 35.425781 L 472.117188 36.292969 L 472.6875 32.957031 L 474.371094 33.246094 L 476.058594 33.53125 L 476.628906 30.203125 L 478.320312 30.492188 L 479.175781 25.488281 L 479.457031 23.828125 L 479.460938 23.820312 L 480.027344 20.488281 Z M 478.339844 20.199219 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#29e82a2832)">
				<g clipPath="url(#6237314a5d)">
					<g clipPath="url(#be9ae43c4e)">
						<path
							fill="#ffffff"
							d="M 100.914062 17.253906 L 98.648438 11.382812 L 97.164062 11.957031 L 96.027344 9.015625 L 94.542969 9.589844 L 93.410156 6.65625 L 90.445312 7.800781 L 89.3125 4.863281 L 84.855469 6.582031 L 83.71875 3.644531 L 79.269531 5.363281 L 77.695312 5.96875 L 73.242188 7.6875 L 74.378906 10.628906 L 69.921875 12.347656 L 71.054688 15.285156 L 68.089844 16.429688 L 69.222656 19.363281 L 67.734375 19.9375 L 68.871094 22.875 L 67.382812 23.449219 L 69.648438 29.320312 L 68.164062 29.894531 L 72.164062 40.261719 L 84.828125 35.375 L 88.585938 33.925781 L 85.183594 25.113281 L 86.582031 24.574219 L 89.984375 33.386719 L 106.402344 27.046875 L 102.402344 16.679688 Z M 100.914062 17.253906 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#7d0439032a)">
				<g clipPath="url(#16590b826c)">
					<g clipPath="url(#bfd2fbfa7d)">
						<path
							fill="#000000"
							d="M 100.429688 18.335938 L 99.296875 15.402344 L 98.164062 12.464844 L 96.683594 13.035156 L 95.550781 10.097656 L 95.542969 10.097656 L 94.0625 10.671875 L 92.929688 7.730469 L 91.441406 8.304688 L 89.957031 8.878906 L 88.824219 5.945312 L 87.339844 6.519531 L 85.859375 7.089844 L 85.855469 7.09375 L 84.375 7.664062 L 83.242188 4.726562 L 81.753906 5.296875 L 80.269531 5.871094 L 78.78125 6.445312 L 75.8125 7.59375 L 74.324219 8.164062 L 75.460938 11.105469 L 73.980469 11.675781 L 72.496094 12.25 L 71.007812 12.824219 L 72.140625 15.753906 L 70.65625 16.328125 L 69.167969 16.902344 L 70.304688 19.839844 L 68.824219 20.410156 L 69.957031 23.351562 L 68.472656 23.925781 L 69.605469 26.863281 L 70.738281 29.796875 L 69.253906 30.367188 L 70.382812 33.300781 L 70.386719 33.308594 L 71.519531 36.246094 L 72.652344 39.179688 L 72.65625 39.1875 L 74.140625 38.613281 L 75.628906 38.039062 L 77.105469 37.46875 L 77.113281 37.464844 L 78.59375 36.894531 L 81.5625 35.746094 L 83.050781 35.175781 L 84.527344 34.601562 L 84.535156 34.601562 L 86.015625 34.03125 L 86.011719 34.023438 L 86.015625 34.03125 L 87.5 33.457031 L 87.496094 33.449219 L 86.367188 30.515625 L 85.230469 27.578125 L 85.230469 27.570312 L 84.101562 24.644531 L 85.585938 24.074219 L 87.070312 23.5 L 88.199219 26.425781 L 88.203125 26.429688 L 89.339844 29.371094 L 90.46875 32.300781 L 90.472656 32.308594 L 91.957031 31.734375 L 93.445312 31.160156 L 94.921875 30.589844 L 94.929688 30.589844 L 96.410156 30.019531 L 99.378906 28.871094 L 100.867188 28.296875 L 102.347656 27.726562 L 102.351562 27.722656 L 103.832031 27.152344 L 105.316406 26.578125 L 105.316406 26.574219 L 104.183594 23.640625 L 103.050781 20.703125 L 103.046875 20.695312 L 101.914062 17.761719 Z M 100.429688 18.335938 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#5abf801f65)">
				<g clipPath="url(#3d563d223f)">
					<g clipPath="url(#ce25bfea84)">
						<path
							fill="#e32935"
							d="M 98.949219 18.90625 L 97.464844 19.480469 L 96.332031 16.546875 L 95.199219 13.609375 L 93.710938 14.183594 L 92.578125 11.242188 L 91.089844 11.816406 L 89.957031 8.878906 L 88.472656 9.453125 L 86.992188 10.023438 L 86.984375 10.023438 L 85.507812 10.597656 L 85.507812 10.601562 L 85.484375 10.605469 L 85.507812 10.597656 L 84.375 7.664062 L 82.890625 8.238281 L 81.402344 8.8125 L 79.917969 9.382812 L 78.429688 9.957031 L 75.460938 11.105469 L 76.589844 14.039062 L 75.113281 14.609375 L 73.625 15.179688 L 72.140625 15.753906 L 73.273438 18.695312 L 71.789062 19.265625 L 72.921875 22.207031 L 71.4375 22.78125 L 72.570312 25.71875 L 73.703125 28.652344 L 72.222656 29.222656 L 73.355469 32.152344 L 73.371094 32.15625 L 73.359375 32.160156 L 74.492188 35.101562 L 75.972656 34.527344 L 75.980469 34.527344 L 77.457031 33.957031 L 78.945312 33.382812 L 81.914062 32.234375 L 83.402344 31.660156 L 82.265625 28.722656 L 82.261719 28.726562 L 82.265625 28.714844 L 81.136719 25.789062 L 82.613281 25.21875 L 81.480469 22.28125 L 82.964844 21.707031 L 84.453125 21.132812 L 85.9375 20.558594 L 87.421875 19.988281 L 88.558594 22.925781 L 90.042969 22.351562 L 91.171875 25.277344 L 91.183594 25.28125 L 91.175781 25.285156 L 92.308594 28.222656 L 93.789062 27.652344 L 93.796875 27.648438 L 95.273438 27.078125 L 96.761719 26.503906 L 98.246094 25.933594 L 99.730469 25.359375 L 101.21875 24.785156 L 100.082031 21.847656 L 100.082031 21.839844 Z M 98.949219 18.90625 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#1779d7cac0)">
				<g clipPath="url(#5df4219309)">
					<g clipPath="url(#5dbc16bbf5)">
						<path
							fill="#fbd502"
							d="M 98.949219 18.90625 L 97.464844 19.480469 L 95.976562 20.054688 L 94.847656 17.121094 L 93.359375 17.695312 L 92.226562 14.757812 L 90.738281 15.328125 L 89.605469 12.390625 L 88.125 12.960938 L 86.992188 10.023438 L 85.507812 10.597656 L 84.019531 11.167969 L 82.535156 11.742188 L 81.046875 12.316406 L 78.078125 13.464844 L 76.589844 14.039062 L 75.113281 14.609375 L 76.246094 17.546875 L 74.761719 18.121094 L 75.894531 21.058594 L 74.410156 21.632812 L 75.542969 24.570312 L 74.058594 25.144531 L 75.1875 28.078125 L 73.710938 28.648438 L 73.703125 28.652344 L 72.222656 29.222656 L 73.355469 32.152344 L 73.363281 32.152344 L 73.359375 32.160156 L 74.492188 35.101562 L 77.457031 33.957031 L 77.183594 26.617188 L 78.90625 25.722656 L 78.515625 23.425781 L 79.664062 21.976562 L 80.136719 18.785156 L 81.625 18.210938 L 83.101562 17.640625 L 84.589844 17.066406 L 86.832031 16.253906 L 87.882812 18.976562 L 89.371094 18.402344 L 90.390625 18.847656 L 92.035156 20.558594 L 94.296875 20.710938 L 95.550781 24.109375 L 95.285156 27.082031 L 96.769531 26.507812 L 98.257812 25.9375 L 101.226562 24.789062 L 100.09375 21.851562 L 100.085938 21.851562 L 100.089844 21.84375 L 98.957031 18.902344 Z M 90.394531 18.839844 Z M 90.394531 18.839844 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#795022cc3e)">
				<g clipPath="url(#4e545b5f49)">
					<g clipPath="url(#e320b0c5ae)">
						<path
							fill="#43aefa"
							d="M 95.625 23.566406 L 97.113281 22.992188 L 98.246094 25.933594 L 96.761719 26.503906 L 95.273438 27.078125 L 94.140625 24.140625 Z M 94.492188 20.628906 L 93.359375 17.695312 L 91.875 18.269531 L 90.394531 18.839844 L 89.261719 15.902344 L 87.773438 16.472656 L 86.640625 13.535156 L 85.15625 14.109375 L 83.667969 14.683594 L 82.183594 15.253906 L 80.695312 15.828125 L 79.210938 16.402344 L 80.34375 19.339844 L 81.832031 18.769531 L 83.316406 18.195312 L 84.804688 17.621094 L 86.289062 17.046875 L 87.421875 19.988281 L 88.910156 19.414062 L 90.386719 18.84375 L 91.523438 21.78125 L 93.007812 21.207031 L 94.136719 24.132812 L 95.625 23.558594 L 97.109375 22.984375 L 95.976562 20.054688 Z M 78.859375 19.914062 L 77.378906 20.484375 L 78.515625 23.425781 L 79.992188 22.855469 L 80 22.851562 L 81.480469 22.28125 L 80.34375 19.339844 L 79.210938 16.402344 L 77.726562 16.976562 Z M 75.542969 24.570312 L 76.675781 27.503906 L 75.1875 28.078125 L 76.320312 31.007812 L 77.804688 30.4375 L 79.292969 29.863281 L 78.164062 26.9375 L 79.648438 26.363281 L 78.515625 23.425781 L 77.027344 24 Z M 76.324219 31.015625 L 77.457031 33.957031 L 78.945312 33.382812 L 80.429688 32.808594 L 79.296875 29.871094 L 77.808594 30.441406 Z M 76.324219 31.015625 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#da61e5668e)">
				<g clipPath="url(#f583359f07)">
					<g clipPath="url(#ab35624ddc)">
						<g clipPath="url(#32103eed2e)">
							<path
								fill="#ffffff"
								d="M 116.710938 179.652344 L 113.199219 174.648438 L 111.976562 175.507812 L 107.53125 169.167969 L 108.757812 168.308594 L 107.933594 167.136719 L 105.492188 168.851562 L 103.734375 166.347656 L 102.511719 167.207031 L 99.824219 163.378906 L 101.050781 162.519531 L 99.292969 160.015625 L 100.511719 159.160156 L 98.753906 156.65625 L 99.980469 155.796875 L 98.226562 153.296875 L 99.453125 152.4375 L 97.695312 149.933594 L 113.675781 138.726562 L 118.113281 145.058594 L 115.667969 146.777344 L 117.421875 149.28125 L 114.980469 150.996094 L 115.804688 152.171875 L 118.25 150.460938 L 120.933594 154.285156 L 119.707031 155.144531 L 121.464844 157.648438 L 119.023438 159.363281 L 120.773438 161.863281 L 119.550781 162.722656 L 121.308594 165.226562 L 118.859375 166.945312 L 120.613281 169.449219 L 119.390625 170.308594 L 121.144531 172.804688 L 118.699219 174.519531 L 120.457031 177.023438 Z M 116.710938 179.652344 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#d063319813)">
				<g clipPath="url(#ff867df785)">
					<g clipPath="url(#05b62e1052)">
						<g clipPath="url(#a5f97be3c5)">
							<path
								fill="#000000"
								d="M 113.492188 139.847656 L 115.246094 142.351562 L 117 144.851562 L 117.003906 144.855469 L 115.78125 145.714844 L 114.554688 146.574219 L 116.308594 149.074219 L 115.085938 149.929688 L 113.867188 150.785156 L 115.621094 153.292969 L 116.839844 152.4375 L 118.066406 151.578125 L 119.816406 154.078125 L 119.820312 154.082031 L 118.597656 154.941406 L 120.351562 157.441406 L 119.132812 158.296875 L 117.90625 159.15625 L 119.660156 161.652344 L 118.4375 162.511719 L 120.191406 165.015625 L 118.96875 165.875 L 117.742188 166.734375 L 119.5 169.238281 L 118.28125 170.09375 L 120.039062 172.601562 L 118.8125 173.457031 L 117.589844 174.316406 L 119.34375 176.816406 L 118.117188 177.675781 L 116.894531 178.535156 L 115.140625 176.035156 L 115.136719 176.027344 L 113.382812 173.53125 L 112.160156 174.386719 L 108.644531 169.378906 L 109.871094 168.519531 L 108.117188 166.019531 L 106.894531 166.878906 L 105.675781 167.734375 L 103.921875 165.234375 L 102.695312 166.09375 L 102.691406 166.085938 L 100.941406 163.585938 L 102.164062 162.730469 L 100.40625 160.222656 L 101.625 159.367188 L 99.871094 156.863281 L 101.09375 156.003906 L 99.339844 153.507812 L 100.566406 152.648438 L 98.808594 150.140625 L 100.035156 149.285156 L 101.257812 148.425781 L 102.476562 147.570312 L 102.484375 147.566406 L 103.703125 146.710938 L 106.148438 144.992188 L 107.375 144.136719 L 108.597656 143.277344 L 109.816406 142.421875 L 111.042969 141.5625 L 112.265625 140.703125 Z M 113.492188 139.847656 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#4ed275ac14)">
				<g clipPath="url(#18d40297c4)">
					<g clipPath="url(#6f83451a48)">
						<g clipPath="url(#a2c2d83550)">
							<path
								fill="#fbd502"
								d="M 111.574219 144.925781 L 110.355469 145.78125 L 109.132812 146.640625 L 107.90625 147.5 L 106.683594 148.359375 L 105.457031 149.214844 L 104.238281 150.070312 L 103.015625 150.929688 L 101.789062 151.789062 L 103.542969 154.289062 L 102.320312 155.148438 L 104.074219 157.652344 L 102.851562 158.511719 L 104.609375 161.015625 L 103.382812 161.875 L 105.140625 164.378906 L 106.363281 163.519531 L 107.589844 162.660156 L 108.8125 161.804688 L 110.039062 160.945312 L 111.789062 163.445312 L 110.566406 164.300781 L 112.320312 166.800781 L 111.09375 167.660156 L 112.851562 170.164062 L 114.609375 172.671875 L 115.832031 171.8125 L 117.058594 170.953125 L 115.300781 168.449219 L 116.519531 167.59375 L 116.523438 167.589844 L 117.742188 166.734375 L 115.988281 164.230469 L 117.210938 163.371094 L 115.457031 160.871094 L 116.683594 160.011719 L 117.90625 159.15625 L 116.15625 156.65625 L 117.378906 155.796875 L 115.621094 153.292969 L 114.398438 154.148438 L 113.171875 155.007812 L 111.949219 155.867188 L 110.191406 153.363281 L 111.417969 152.503906 L 112.640625 151.644531 L 110.886719 149.144531 L 112.113281 148.285156 L 113.332031 147.433594 L 114.554688 146.574219 L 112.800781 144.070312 Z M 111.574219 144.925781 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#991a479491)">
				<g clipPath="url(#5151429c0c)">
					<g clipPath="url(#f8399909f6)">
						<g clipPath="url(#9414a0df7c)">
							<path
								fill="#ffffff"
								d="M 384.238281 178.875 L 384.542969 176.289062 L 389.675781 176.894531 L 389.980469 174.3125 L 392.546875 174.617188 L 392.851562 172.03125 L 395.414062 172.332031 L 395.71875 169.746094 L 397.003906 169.898438 L 397.304688 167.316406 L 398.589844 167.46875 L 399.195312 162.304688 L 400.480469 162.453125 L 401.855469 150.746094 L 393.480469 149.761719 L 392.195312 149.613281 L 386.378906 148.929688 L 386.074219 151.515625 L 380.941406 150.910156 L 380.640625 153.492188 L 379.355469 153.339844 L 379.050781 155.925781 L 376.488281 155.625 L 375.882812 160.789062 L 374.597656 160.640625 L 374.292969 163.222656 L 373.007812 163.074219 L 372.402344 168.238281 L 371.125 168.089844 L 370.050781 177.210938 Z M 384.238281 178.875 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#8b42da7d0b)">
				<g clipPath="url(#de365bf592)">
					<g clipPath="url(#05722672fb)">
						<g clipPath="url(#260084d328)">
							<path
								fill="#000000"
								d="M 370.8125 176.605469 L 372.089844 176.753906 L 373.375 176.90625 L 373.382812 176.90625 L 374.660156 177.054688 L 375.9375 177.207031 L 375.945312 177.207031 L 377.222656 177.355469 L 379.792969 177.660156 L 379.796875 177.660156 L 381.070312 177.808594 L 381.078125 177.808594 L 382.355469 177.960938 L 383.640625 178.109375 L 383.945312 175.527344 L 385.226562 175.675781 L 386.511719 175.828125 L 387.796875 175.976562 L 389.082031 176.128906 L 389.382812 173.550781 L 390.664062 173.699219 L 391.949219 173.851562 L 392.25 171.265625 L 392.257812 171.265625 L 393.535156 171.417969 L 394.820312 171.566406 L 395.125 168.980469 L 396.402344 169.132812 L 396.707031 166.550781 L 397.988281 166.703125 L 398.292969 164.117188 L 398.597656 161.539062 L 399.882812 161.6875 L 400.183594 159.101562 L 400.488281 156.523438 L 401.097656 151.351562 L 399.8125 151.203125 L 398.527344 151.050781 L 397.25 150.902344 L 397.242188 150.898438 L 395.96875 150.75 L 395.964844 150.75 L 394.679688 150.597656 L 393.394531 150.449219 L 392.117188 150.296875 L 390.832031 150.148438 L 388.261719 149.84375 L 386.980469 149.695312 L 386.675781 152.273438 L 385.398438 152.125 L 382.828125 151.820312 L 381.542969 151.671875 L 381.542969 151.675781 L 381.238281 154.257812 L 379.957031 154.105469 L 379.652344 156.691406 L 378.375 156.539062 L 378.367188 156.539062 L 377.089844 156.390625 L 376.785156 158.976562 L 376.480469 161.554688 L 375.203125 161.40625 L 375.199219 161.402344 L 374.894531 163.984375 L 373.609375 163.832031 L 373.609375 163.839844 L 373.304688 166.417969 L 373.003906 169.003906 L 371.722656 168.851562 L 371.71875 168.851562 L 371.414062 171.433594 L 371.414062 171.4375 L 371.109375 174.019531 L 370.808594 176.601562 Z M 370.8125 176.605469 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#6ba5a03401)">
				<g clipPath="url(#3c15ceb82d)">
					<g clipPath="url(#f92ffc6664)">
						<g clipPath="url(#0fe05ae2e9)">
							<path
								fill="#37be59"
								d="M 374.964844 174.46875 L 376.242188 174.621094 L 376.25 174.621094 L 377.527344 174.773438 L 378.8125 174.921875 L 380.097656 175.074219 L 381.378906 175.222656 L 382.660156 175.375 L 383.945312 175.527344 L 384.246094 172.945312 L 385.53125 173.097656 L 386.816406 173.246094 L 388.101562 173.398438 L 389.382812 173.550781 L 389.6875 170.964844 L 390.96875 171.113281 L 392.25 171.265625 L 392.554688 168.679688 L 393.839844 168.832031 L 394.144531 166.25 L 394.144531 166.246094 L 394.148438 166.25 L 395.425781 166.402344 L 395.730469 163.816406 L 396.035156 161.238281 L 397.3125 161.386719 L 397.617188 158.800781 L 397.917969 156.222656 L 396.640625 156.066406 L 396.335938 158.652344 L 396.332031 158.652344 L 395.058594 158.5 L 395.050781 158.519531 L 395.054688 158.5 L 393.769531 158.347656 L 393.464844 160.933594 L 392.179688 160.785156 L 390.902344 160.632812 L 391.207031 158.046875 L 392.484375 158.199219 L 392.789062 155.613281 L 394.074219 155.765625 L 395.355469 155.914062 L 395.660156 153.335938 L 394.375 153.183594 L 394.375 153.179688 L 393.09375 153.027344 L 391.8125 152.878906 L 391.808594 152.875 L 390.527344 152.726562 L 389.246094 152.574219 L 387.960938 152.425781 L 387.65625 155.011719 L 386.371094 154.859375 L 385.09375 154.707031 L 383.808594 154.558594 L 382.523438 154.40625 L 382.21875 156.992188 L 380.9375 156.839844 L 379.652344 156.691406 L 379.347656 159.277344 L 379.042969 161.855469 L 377.761719 161.703125 L 377.457031 164.285156 L 376.179688 164.132812 L 375.570312 169.304688 L 374.292969 169.15625 L 373.988281 171.734375 L 373.988281 171.742188 L 373.6875 174.320312 Z M 378.132812 169.605469 L 379.417969 169.757812 L 379.722656 167.171875 L 381.007812 167.324219 L 382.292969 167.472656 L 382.59375 164.894531 L 383.871094 165.042969 L 385.15625 165.195312 L 385.460938 162.609375 L 386.746094 162.761719 L 388.03125 162.910156 L 388.332031 160.332031 L 389.617188 160.484375 L 390.894531 160.632812 L 390.59375 163.210938 L 389.316406 163.0625 L 389.011719 165.640625 L 387.726562 165.492188 L 386.441406 165.339844 L 386.140625 167.925781 L 384.855469 167.773438 L 383.570312 167.625 L 383.265625 170.210938 L 381.988281 170.058594 L 380.703125 169.910156 L 380.398438 172.488281 L 379.117188 172.335938 L 377.832031 172.1875 Z M 378.132812 169.605469 "
								fillOpacity="1"
								fillRule="nonzero"
							/>
						</g>
					</g>
				</g>
			</g>
			<g clipPath="url(#9de306025c)">
				<path
					fill="#ffffff"
					d="M 354.65625 134.507812 L 354.65625 131.839844 L 353.328125 131.839844 L 353.328125 129.175781 L 350.660156 129.175781 L 350.660156 125.09375 L 351.996094 125.09375 L 351.996094 123.835938 L 350.660156 123.835938 L 350.660156 114.429688 L 351.996094 114.429688 L 351.996094 111.757812 L 353.328125 111.757812 L 353.328125 109.089844 L 358.660156 109.089844 L 358.660156 106.425781 L 359.996094 106.425781 L 359.996094 103.757812 L 373.410156 103.757812 L 373.410156 106.425781 L 374.738281 106.425781 L 374.738281 109.089844 L 376.070312 109.089844 L 376.070312 111.757812 L 380.074219 111.757812 L 380.070312 114.429688 L 381.402344 114.429688 L 381.402344 123.835938 L 380.070312 123.835938 L 380.070312 126.507812 L 378.734375 126.507812 L 378.734375 129.175781 L 377.40625 129.175781 L 377.40625 131.839844 L 376.070312 131.839844 L 376.070312 134.507812 Z M 354.65625 134.507812 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<path
				fill="#000000"
				d="M 380.695312 115.136719 L 380.695312 123.128906 L 379.367188 123.128906 L 379.367188 125.800781 L 378.035156 125.800781 L 378.035156 128.46875 L 376.699219 128.46875 L 376.699219 131.136719 L 375.363281 131.136719 L 375.363281 133.800781 L 355.363281 133.800781 L 355.363281 131.136719 L 354.035156 131.136719 L 354.035156 128.46875 L 351.367188 128.46875 L 351.367188 125.800781 L 352.703125 125.800781 L 352.703125 123.128906 L 351.367188 123.128906 L 351.367188 115.136719 L 352.703125 115.136719 L 352.703125 112.464844 L 354.035156 112.464844 L 354.035156 109.796875 L 359.367188 109.796875 L 359.367188 107.132812 L 360.703125 107.132812 L 360.703125 104.464844 L 372.703125 104.464844 L 372.703125 107.132812 L 374.035156 107.132812 L 374.035156 109.796875 L 375.371094 109.796875 L 375.371094 112.464844 L 379.367188 112.464844 L 379.367188 115.136719 Z M 380.695312 115.136719 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill="#cdc2fe"
				d="M 367.363281 112.464844 L 367.363281 115.136719 L 370.03125 115.136719 L 370.03125 117.804688 L 371.367188 117.804688 L 371.367188 115.136719 L 372.703125 115.136719 L 372.703125 109.796875 L 371.367188 109.796875 L 371.367188 107.132812 L 362.03125 107.132812 L 362.03125 109.796875 L 360.703125 109.796875 L 360.703125 112.464844 L 362.03125 112.464844 L 362.03125 115.136719 L 364.699219 115.136719 L 364.699219 112.464844 Z M 367.363281 112.464844 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill="#cdc2fe"
				d="M 359.367188 115.136719 L 359.367188 112.464844 L 355.363281 112.464844 L 355.363281 115.136719 L 354.035156 115.136719 L 354.035156 123.128906 L 355.371094 123.128906 L 355.371094 120.46875 L 358.035156 120.46875 L 358.035156 123.128906 L 356.699219 123.128906 L 356.699219 125.800781 L 354.035156 125.800781 L 354.035156 128.46875 L 356.699219 128.46875 L 356.699219 131.136719 L 363.367188 131.136719 L 363.367188 128.46875 L 364.699219 128.46875 L 364.699219 125.800781 L 362.03125 125.800781 L 362.03125 123.128906 L 359.367188 123.128906 L 359.367188 117.804688 L 362.03125 117.804688 L 362.03125 115.136719 Z M 359.367188 115.136719 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill="#cdc2fe"
				d="M 376.699219 115.136719 L 374.03125 115.136719 L 374.03125 117.796875 L 372.703125 117.796875 L 372.703125 123.128906 L 375.363281 123.128906 L 375.363281 125.800781 L 376.699219 125.800781 L 376.699219 123.128906 L 378.035156 123.128906 L 378.035156 115.136719 Z M 376.699219 115.136719 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill="#cdc2fe"
				d="M 370.03125 123.128906 L 370.03125 125.800781 L 367.363281 125.800781 L 367.363281 128.46875 L 366.035156 128.46875 L 366.035156 131.136719 L 374.035156 131.136719 L 374.035156 125.800781 L 372.703125 125.800781 L 372.703125 123.128906 Z M 370.03125 123.128906 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill="#fbd502"
				d="M 368.699219 117.796875 L 367.371094 117.796875 L 367.371094 115.136719 L 364.699219 115.136719 L 364.699219 117.796875 L 362.03125 117.796875 L 362.03125 123.128906 L 364.699219 123.128906 L 364.699219 125.800781 L 367.371094 125.800781 L 367.371094 123.128906 L 370.03125 123.128906 L 370.03125 117.796875 Z M 368.699219 117.796875 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<g clipPath="url(#19f974f1c9)">
				<g clipPath="url(#1fe9e7c9f9)">
					<g clipPath="url(#d749bb6d03)">
						<path
							fill="#ffffff"
							d="M 436.1875 70.742188 L 436.785156 67.535156 L 438.402344 67.835938 L 440.515625 56.492188 L 438.894531 56.191406 L 439.492188 52.984375 L 437.867188 52.679688 L 438.464844 49.464844 L 413.988281 44.90625 L 413.390625 48.121094 L 411.769531 47.820312 L 411.175781 51.03125 L 409.546875 50.726562 L 407.433594 62.070312 L 409.0625 62.375 L 408.464844 65.582031 L 410.089844 65.882812 L 409.808594 67.398438 L 408.183594 67.09375 L 407.585938 70.300781 L 405.957031 70 L 403.847656 81.34375 L 405.472656 81.648438 L 404.875 84.855469 L 406.496094 85.15625 L 405.90625 88.375 L 408.386719 88.835938 L 430.375 92.929688 L 430.972656 89.710938 L 434.21875 90.316406 L 437.523438 72.558594 L 434.277344 71.953125 L 434.558594 70.441406 Z M 436.1875 70.742188 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#6525ca9638)">
				<g clipPath="url(#c53ce5e424)">
					<g clipPath="url(#8d67614b89)">
						<path
							fill="#000000"
							d="M 439.496094 57.183594 L 437.875 56.882812 L 438.472656 53.675781 L 436.847656 53.371094 L 437.445312 50.15625 L 435.816406 49.851562 L 434.199219 49.550781 L 434.191406 49.550781 L 432.574219 49.246094 L 430.945312 48.945312 L 429.316406 48.640625 L 427.699219 48.339844 L 427.691406 48.339844 L 426.074219 48.039062 L 424.445312 47.734375 L 422.820312 47.433594 L 421.199219 47.128906 L 421.191406 47.128906 L 419.574219 46.828125 L 417.945312 46.523438 L 416.320312 46.222656 L 414.691406 45.917969 L 414.09375 49.136719 L 412.472656 48.835938 L 411.878906 52.042969 L 410.25 51.738281 L 409.652344 54.957031 L 409.054688 58.164062 L 409.050781 58.171875 L 408.457031 61.378906 L 410.082031 61.683594 L 409.484375 64.890625 L 409.484375 64.898438 L 411.101562 65.199219 L 410.503906 68.40625 L 408.886719 68.105469 L 408.289062 71.316406 L 406.660156 71.011719 L 406.0625 74.226562 L 405.464844 77.4375 L 405.464844 77.445312 L 404.867188 80.652344 L 406.496094 80.957031 L 405.898438 84.164062 L 405.894531 84.171875 L 407.515625 84.472656 L 406.917969 87.679688 L 408.542969 87.984375 L 410.171875 88.285156 L 411.796875 88.589844 L 413.417969 88.890625 L 413.425781 88.894531 L 415.042969 89.195312 L 416.671875 89.496094 L 418.296875 89.800781 L 419.914062 90.101562 L 419.925781 90.101562 L 421.542969 90.402344 L 423.171875 90.707031 L 424.796875 91.011719 L 426.414062 91.3125 L 426.425781 91.3125 L 428.042969 91.613281 L 429.667969 91.917969 L 430.265625 88.710938 L 431.894531 89.011719 L 433.519531 89.316406 L 434.121094 86.097656 L 434.71875 82.890625 L 434.71875 82.882812 L 435.316406 79.675781 L 435.914062 76.457031 L 436.511719 73.25 L 436.503906 73.25 L 434.886719 72.945312 L 433.257812 72.644531 L 433.855469 69.4375 L 435.480469 69.738281 L 435.484375 69.730469 L 436.082031 66.523438 L 437.699219 66.824219 L 437.707031 66.824219 L 438.304688 63.617188 L 438.308594 63.609375 L 438.902344 60.402344 L 439.503906 57.183594 Z M 439.496094 57.183594 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#8bb4706dcd)">
				<g clipPath="url(#c9277e8a08)">
					<g clipPath="url(#65f4cf455b)">
						<path
							fill="#fbd502"
							d="M 431.035156 75.550781 L 431.628906 72.339844 L 430.011719 72.039062 L 430.003906 72.039062 L 428.386719 71.738281 L 426.757812 71.433594 L 425.132812 71.132812 L 423.503906 70.828125 L 422.90625 74.035156 L 422.308594 77.253906 L 421.710938 80.460938 L 421.710938 80.46875 L 421.113281 83.675781 L 420.511719 86.894531 L 422.140625 87.195312 L 423.765625 87.5 L 425.394531 87.800781 L 427.011719 88.101562 L 427.023438 88.105469 L 428.640625 88.40625 L 429.238281 85.191406 L 430.867188 85.492188 L 431.464844 82.285156 L 431.464844 82.277344 L 432.0625 79.070312 L 432.660156 75.851562 Z M 425.992188 84.585938 L 424.367188 84.28125 L 424.964844 81.074219 L 424.964844 81.066406 L 425.5625 77.859375 L 426.160156 74.640625 L 427.789062 74.945312 L 429.40625 75.246094 L 428.808594 78.460938 L 428.210938 81.671875 L 428.207031 81.679688 L 427.613281 84.886719 Z M 425.992188 84.585938 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#7459125cce)">
				<g clipPath="url(#a7bff18ff7)">
					<g clipPath="url(#824d588d78)">
						<path
							fill="#43aefa"
							d="M 418.632812 69.921875 L 417.011719 69.621094 L 417.003906 69.617188 L 415.386719 69.316406 L 413.757812 69.015625 L 412.132812 68.710938 L 411.535156 71.917969 L 409.90625 71.617188 L 409.308594 74.832031 L 408.710938 78.039062 L 408.710938 78.050781 L 408.113281 81.257812 L 409.738281 81.558594 L 409.140625 84.777344 L 410.769531 85.078125 L 412.394531 85.382812 L 414.011719 85.683594 L 414.023438 85.683594 L 415.640625 85.984375 L 416.238281 82.769531 L 417.867188 83.074219 L 418.464844 79.863281 L 418.464844 79.855469 L 419.0625 76.648438 L 419.660156 73.433594 L 418.035156 73.128906 Z M 415.808594 76.042969 L 415.210938 79.25 L 415.210938 79.257812 L 414.613281 82.464844 L 412.992188 82.164062 L 411.367188 81.863281 L 411.964844 78.65625 L 411.964844 78.644531 L 412.5625 75.4375 L 413.160156 72.222656 L 414.789062 72.523438 L 416.40625 72.824219 Z M 434.621094 56.277344 L 435.21875 53.070312 L 433.601562 52.765625 L 433.589844 52.765625 L 431.972656 52.464844 L 430.347656 52.160156 L 428.71875 51.859375 L 428.121094 55.066406 L 426.496094 54.761719 L 425.894531 57.980469 L 425.300781 61.1875 L 425.296875 61.195312 L 424.699219 64.402344 L 426.328125 64.707031 L 425.726562 67.921875 L 427.355469 68.226562 L 428.984375 68.527344 L 430.601562 68.832031 L 430.609375 68.832031 L 432.226562 69.132812 L 432.828125 65.917969 L 434.453125 66.21875 L 435.050781 63.011719 L 435.050781 63.003906 L 435.648438 59.796875 L 436.25 56.578125 C 436.25 56.578125 434.621094 56.277344 434.621094 56.277344 Z M 432.394531 59.191406 L 431.796875 62.398438 L 431.796875 62.40625 L 431.199219 65.613281 L 429.582031 65.3125 L 427.953125 65.011719 L 428.550781 61.800781 L 428.554688 61.792969 L 429.148438 58.585938 L 429.746094 55.378906 L 431.375 55.679688 L 432.992188 55.980469 Z M 432.394531 59.191406 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#bab29ac48b)">
				<g clipPath="url(#259d182153)">
					<g clipPath="url(#9f9d21d820)">
						<path
							fill="#f6474b"
							d="M 415.554688 59.375 L 416.152344 56.164062 L 416.75 52.957031 L 418.375 53.261719 L 419.992188 53.5625 L 420.003906 53.5625 L 421.621094 53.863281 L 423.246094 54.167969 L 423.847656 50.953125 L 422.21875 50.648438 L 420.601562 50.347656 L 420.59375 50.34375 L 418.972656 50.042969 L 417.347656 49.742188 L 415.71875 49.4375 L 415.121094 52.644531 L 413.496094 52.34375 L 412.898438 55.558594 L 412.300781 58.765625 L 412.296875 58.777344 L 411.699219 61.984375 L 413.328125 62.285156 L 412.730469 65.503906 L 414.355469 65.804688 L 415.984375 66.109375 L 417.601562 66.410156 L 417.609375 66.410156 L 419.230469 66.714844 L 419.828125 63.496094 L 421.453125 63.800781 L 422.050781 60.59375 L 422.054688 60.582031 L 422.652344 57.375 L 421.023438 57.074219 L 419.40625 56.769531 L 419.394531 56.769531 L 417.777344 56.46875 L 417.179688 59.683594 L 418.796875 59.984375 L 418.199219 63.195312 L 416.582031 62.894531 L 414.953125 62.589844 L 415.550781 59.382812 Z M 415.554688 59.375 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#1166176bad)">
				<path
					fill="#ffffff"
					d="M 611.699219 178.199219 C 600.929688 178.199219 592.199219 186.929688 592.199219 197.699219 L 611.699219 197.699219 Z M 611.699219 178.199219 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#34e1549e6d)">
				<path
					fill="#ffffff"
					d="M 611.699219 19.792969 C 600.929688 19.792969 592.199219 11.0625 592.199219 0.292969 L 611.699219 0.292969 Z M 611.699219 19.792969 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#8f64d54065)">
				<path
					fill="#ffffff"
					d="M 0.292969 178.199219 C 11.0625 178.199219 19.792969 186.929688 19.792969 197.699219 L 0.292969 197.699219 Z M 0.292969 178.199219 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#1347139ee0)">
				<path
					fill="#ffffff"
					d="M 0.292969 19.792969 C 11.0625 19.792969 19.792969 11.0625 19.792969 0.292969 L 0.292969 0.292969 Z M 0.292969 19.792969 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(151.027467, 105.808784)">
					<g>
						<path d="M 23.546875 -9.417969 L 20.015625 -9.417969 L 20.015625 -19.050781 L 16 -19.050781 L 16 -28.683594 L 13.058594 -28.683594 L 13.058594 0.265625 L 3.476562 0.265625 L 3.476562 -38.582031 L 17.070312 -38.582031 L 17.070312 -28.949219 L 20.546875 -28.949219 L 20.546875 -19.316406 L 24.5625 -19.316406 L 24.5625 -9.632812 L 27.558594 -9.632812 L 27.558594 -38.582031 L 37.136719 -38.582031 L 37.136719 0.265625 L 23.546875 0.265625 Z M 23.546875 -9.417969 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(191.639845, 105.808784)">
					<g>
						<path d="M 2.675781 -38.582031 L 12.253906 -38.582031 L 12.253906 0.265625 L 2.675781 0.265625 Z M 2.675781 -38.582031 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(206.568502, 105.808784)">
					<g>
						<path d="M 37.511719 0.265625 L 13.058594 0.265625 L 13.058594 -5.03125 L 7.757812 -5.03125 L 7.757812 -10.328125 L 3.476562 -10.328125 L 3.476562 -27.988281 L 7.757812 -27.988281 L 7.757812 -33.285156 L 13.058594 -33.285156 L 13.058594 -38.582031 L 33.875 -38.582031 L 33.875 -33.285156 L 18.355469 -33.285156 L 18.355469 -27.988281 L 13.058594 -27.988281 L 13.058594 -10.328125 L 18.355469 -10.328125 L 18.355469 -5.03125 L 27.988281 -5.03125 L 27.988281 -16.804688 L 19.480469 -16.804688 L 19.480469 -22.101562 L 37.566406 -22.101562 Z M 37.511719 0.265625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(247.608935, 105.808784)">
					<g>
						<path d="M 27.988281 -17.339844 L 13.058594 -17.339844 L 13.058594 0.265625 L 3.476562 0.265625 L 3.476562 -38.582031 L 13.058594 -38.582031 L 13.058594 -22.636719 L 27.988281 -22.636719 L 27.988281 -38.582031 L 37.566406 -38.582031 L 37.566406 0.265625 L 27.988281 0.265625 Z M 27.988281 -17.339844 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(288.649368, 105.808784)">
					<g>
						<path d="M 34.996094 -33.285156 L 24.027344 -33.285156 L 24.027344 0.265625 L 14.449219 0.265625 L 14.449219 -33.285156 L 3.476562 -33.285156 L 3.476562 -38.582031 L 34.996094 -38.582031 Z M 34.996094 -33.285156 " />
					</g>
				</g>
			</g>
			<g fill="#ff34d8" fillOpacity="1">
				<g transform="translate(150.524717, 102.231524)">
					<g>
						<path d="M 23.546875 -9.417969 L 20.015625 -9.417969 L 20.015625 -19.050781 L 16 -19.050781 L 16 -28.683594 L 13.058594 -28.683594 L 13.058594 0.265625 L 3.476562 0.265625 L 3.476562 -38.582031 L 17.070312 -38.582031 L 17.070312 -28.949219 L 20.546875 -28.949219 L 20.546875 -19.316406 L 24.5625 -19.316406 L 24.5625 -9.632812 L 27.558594 -9.632812 L 27.558594 -38.582031 L 37.136719 -38.582031 L 37.136719 0.265625 L 23.546875 0.265625 Z M 23.546875 -9.417969 " />
					</g>
				</g>
			</g>
			<g fill="#ff34d8" fillOpacity="1">
				<g transform="translate(191.137096, 102.231524)">
					<g>
						<path d="M 2.675781 -38.582031 L 12.253906 -38.582031 L 12.253906 0.265625 L 2.675781 0.265625 Z M 2.675781 -38.582031 " />
					</g>
				</g>
			</g>
			<g fill="#ff34d8" fillOpacity="1">
				<g transform="translate(206.065752, 102.231524)">
					<g>
						<path d="M 37.511719 0.265625 L 13.058594 0.265625 L 13.058594 -5.03125 L 7.757812 -5.03125 L 7.757812 -10.328125 L 3.476562 -10.328125 L 3.476562 -27.988281 L 7.757812 -27.988281 L 7.757812 -33.285156 L 13.058594 -33.285156 L 13.058594 -38.582031 L 33.875 -38.582031 L 33.875 -33.285156 L 18.355469 -33.285156 L 18.355469 -27.988281 L 13.058594 -27.988281 L 13.058594 -10.328125 L 18.355469 -10.328125 L 18.355469 -5.03125 L 27.988281 -5.03125 L 27.988281 -16.804688 L 19.480469 -16.804688 L 19.480469 -22.101562 L 37.566406 -22.101562 Z M 37.511719 0.265625 " />
					</g>
				</g>
			</g>
			<g fill="#ff34d8" fillOpacity="1">
				<g transform="translate(247.106186, 102.231524)">
					<g>
						<path d="M 27.988281 -17.339844 L 13.058594 -17.339844 L 13.058594 0.265625 L 3.476562 0.265625 L 3.476562 -38.582031 L 13.058594 -38.582031 L 13.058594 -22.636719 L 27.988281 -22.636719 L 27.988281 -38.582031 L 37.566406 -38.582031 L 37.566406 0.265625 L 27.988281 0.265625 Z M 27.988281 -17.339844 " />
					</g>
				</g>
			</g>
			<g fill="#ff34d8" fillOpacity="1">
				<g transform="translate(288.146619, 102.231524)">
					<g>
						<path d="M 34.996094 -33.285156 L 24.027344 -33.285156 L 24.027344 0.265625 L 14.449219 0.265625 L 14.449219 -33.285156 L 3.476562 -33.285156 L 3.476562 -38.582031 L 34.996094 -38.582031 Z M 34.996094 -33.285156 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(214.212406, 125.763)">
					<g>
						<path d="M 3.554688 -4.914062 L 3.554688 0 L 1.191406 0 L 1.191406 -12.175781 L 10.664062 -12.175781 L 10.664062 -11.003906 L 11.855469 -11.003906 L 11.855469 -6.089844 L 10.664062 -6.089844 L 10.664062 -4.914062 Z M 3.554688 -6.089844 L 9.488281 -6.089844 L 9.488281 -11.003906 L 3.554688 -11.003906 Z M 3.554688 -6.089844 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(227.25252, 125.763)">
					<g>
						<path d="M 8.332031 -6.242188 L 8.332031 -7.941406 L 2.363281 -7.941406 L 2.363281 -9.117188 L 9.523438 -9.117188 L 9.523438 -7.941406 L 10.699219 -7.941406 L 10.699219 -1.171875 L 9.507812 -1.171875 L 9.507812 0 L 2.382812 0 L 2.382812 -1.171875 L 1.191406 -1.171875 L 1.191406 -5.066406 L 2.382812 -5.066406 L 2.382812 -6.242188 Z M 8.332031 -5.066406 L 3.554688 -5.066406 L 3.554688 -1.171875 L 8.332031 -1.171875 Z M 8.332031 -5.066406 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(239.136535, 125.763)">
					<g>
						<path d="M 3.554688 -2.363281 L 3.554688 -1.171875 L 8.332031 -1.171875 L 8.332031 -4.066406 L 2.382812 -4.066406 L 2.382812 -5.238281 L 1.191406 -5.238281 L 1.191406 -7.941406 L 2.382812 -7.941406 L 2.382812 -9.117188 L 9.507812 -9.117188 L 9.507812 -7.941406 L 10.699219 -7.941406 L 10.699219 -6.75 L 8.332031 -6.75 L 8.332031 -7.941406 L 3.554688 -7.941406 L 3.554688 -5.238281 L 9.507812 -5.238281 L 9.507812 -4.066406 L 10.699219 -4.066406 L 10.699219 -1.171875 L 9.507812 -1.171875 L 9.507812 0 L 2.382812 0 L 2.382812 -1.171875 L 1.191406 -1.171875 L 1.191406 -2.363281 Z M 3.554688 -2.363281 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(251.020551, 125.763)">
					<g>
						<path d="M 3.554688 -2.363281 L 3.554688 -1.171875 L 8.332031 -1.171875 L 8.332031 -4.066406 L 2.382812 -4.066406 L 2.382812 -5.238281 L 1.191406 -5.238281 L 1.191406 -7.941406 L 2.382812 -7.941406 L 2.382812 -9.117188 L 9.507812 -9.117188 L 9.507812 -7.941406 L 10.699219 -7.941406 L 10.699219 -6.75 L 8.332031 -6.75 L 8.332031 -7.941406 L 3.554688 -7.941406 L 3.554688 -5.238281 L 9.507812 -5.238281 L 9.507812 -4.066406 L 10.699219 -4.066406 L 10.699219 -1.171875 L 9.507812 -1.171875 L 9.507812 0 L 2.382812 0 L 2.382812 -1.171875 L 1.191406 -1.171875 L 1.191406 -2.363281 Z M 3.554688 -2.363281 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 170.005326)">
					<g>
						<path d="M 0.253906 -5.640625 C 0.253906 -8.867188 -2.539062 -10.578125 -5.902344 -10.578125 C -9.101562 -10.578125 -12.074219 -9.101562 -12.074219 -5.632812 C -12.074219 -2.511719 -9.308594 -0.703125 -5.859375 -0.703125 C -2.539062 -0.703125 0.253906 -2.375 0.253906 -5.640625 Z M -1.183594 -5.640625 C -1.183594 -3.503906 -3.191406 -2.242188 -5.867188 -2.242188 C -8.640625 -2.242188 -10.648438 -3.582031 -10.648438 -5.625 C -10.648438 -7.875 -8.519531 -9.039062 -5.902344 -9.039062 C -3.191406 -9.039062 -1.183594 -7.769531 -1.183594 -5.640625 Z M -1.183594 -5.640625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 158.725591)">
					<g>
						<path d="M 0.253906 -5.136719 C 0.253906 -7.667969 -1.632812 -9.34375 -3.796875 -9.34375 C -5.988281 -9.34375 -7.386719 -7.726562 -7.386719 -5.109375 L -7.386719 -3.199219 L -10.550781 -3.617188 L -10.550781 -8.535156 L -11.832031 -8.535156 L -11.832031 -2.3125 L -6.832031 -1.644531 L -6.257812 -2.363281 L -6.25 -4.746094 C -6.25 -6.605469 -5.347656 -7.804688 -3.808594 -7.804688 C -2.3125 -7.804688 -1.164062 -6.640625 -1.164062 -5.136719 C -1.164062 -4.113281 -1.730469 -2.730469 -3.40625 -2.40625 L -3.40625 -0.894531 C -0.652344 -1.226562 0.253906 -3.347656 0.253906 -5.136719 Z M 0.253906 -5.136719 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 148.645088)">
					<g>
						<path d="M -8.015625 -2.40625 L -11.820312 -2.554688 L -11.820312 -1.128906 L -8.015625 -1.25 Z M -8.015625 -2.40625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 145.064771)">
					<g>
						<path d="M 0.253906 -5.292969 C 0.253906 -8.195312 -1.050781 -9.96875 -3.269531 -9.96875 C -5.695312 -9.96875 -6.414062 -7.769531 -6.726562 -5.804688 C -7.015625 -3.6875 -7.546875 -2.496094 -8.789062 -2.496094 C -9.761719 -2.496094 -10.726562 -3.085938 -10.726562 -5.222656 C -10.726562 -6.996094 -9.890625 -7.953125 -8.71875 -7.953125 L -8.71875 -9.5 C -10.691406 -9.5 -12.082031 -8.023438 -12.082031 -5.242188 C -12.082031 -2.164062 -10.5625 -0.957031 -8.796875 -0.957031 C -6.40625 -0.957031 -5.753906 -3.355469 -5.425781 -5.328125 C -5.15625 -7.09375 -4.660156 -8.414062 -3.269531 -8.414062 C -1.808594 -8.414062 -1.070312 -7.300781 -1.070312 -5.285156 C -1.070312 -3.339844 -2.183594 -2.191406 -3.425781 -2.191406 L -3.425781 -0.652344 C -1.632812 -0.652344 0.253906 -2.085938 0.253906 -5.292969 Z M 0.253906 -5.292969 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 134.488929)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 130.091744)">
					<g>
						<path d="M 0.253906 -5.292969 C 0.253906 -8.195312 -1.050781 -9.96875 -3.269531 -9.96875 C -5.695312 -9.96875 -6.414062 -7.769531 -6.726562 -5.804688 C -7.015625 -3.6875 -7.546875 -2.496094 -8.789062 -2.496094 C -9.761719 -2.496094 -10.726562 -3.085938 -10.726562 -5.222656 C -10.726562 -6.996094 -9.890625 -7.953125 -8.71875 -7.953125 L -8.71875 -9.5 C -10.691406 -9.5 -12.082031 -8.023438 -12.082031 -5.242188 C -12.082031 -2.164062 -10.5625 -0.957031 -8.796875 -0.957031 C -6.40625 -0.957031 -5.753906 -3.355469 -5.425781 -5.328125 C -5.15625 -7.09375 -4.660156 -8.414062 -3.269531 -8.414062 C -1.808594 -8.414062 -1.070312 -7.300781 -1.070312 -5.285156 C -1.070312 -3.339844 -2.183594 -2.191406 -3.425781 -2.191406 L -3.425781 -0.652344 C -1.632812 -0.652344 0.253906 -2.085938 0.253906 -5.292969 Z M 0.253906 -5.292969 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 119.515902)">
					<g>
						<path d="M 0 -8.890625 L -1.390625 -8.890625 L -1.390625 -3.148438 L -11.820312 -3.148438 L -11.820312 -1.609375 L 0 -1.609375 Z M 0 -8.890625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 110.278333)">
					<g>
						<path d="M 0 -11.597656 L -11.820312 -6.597656 L -11.820312 -5.121094 L 0 -0.113281 L 0 -1.746094 L -2.675781 -2.867188 L -2.675781 -8.839844 L 0 -9.960938 Z M -9.65625 -5.796875 L -9.855469 -5.851562 L -9.855469 -5.867188 L -9.65625 -5.910156 L -3.980469 -8.292969 L -3.980469 -3.417969 Z M -9.65625 -5.796875 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 98.572779)">
					<g>
						<path d="M 0 -6.492188 L -4.539062 -6.484375 L -11.820312 -11.265625 L -11.820312 -9.441406 L -5.910156 -5.726562 L -5.910156 -5.71875 L -11.820312 -1.992188 L -11.820312 -0.175781 L -4.527344 -4.953125 L 0 -4.953125 Z M 0 -6.492188 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 87.127927)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 82.730742)">
					<g>
						<path d="M -2.554688 -10.195312 L -2.554688 -10.1875 L -11.820312 -2.902344 L -11.820312 -1.609375 L 0 -1.609375 L 0 -3.148438 L -9.238281 -3.148438 L 0 -10.421875 L 0 -11.726562 L -11.820312 -11.726562 L -11.820312 -10.195312 Z M -2.554688 -10.195312 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 69.400146)">
					<g>
						<path d="M 0 -3.148438 L -11.820312 -3.148438 L -11.820312 -1.609375 L 0 -1.609375 Z M 0 -3.148438 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 64.646663)">
					<g>
						<path d="M 0.226562 -6.917969 C 0.226562 -10.761719 -2.640625 -12.953125 -6.222656 -12.941406 L -6.222656 -6.832031 L -4.832031 -6.832031 L -4.832031 -11.34375 C -2.808594 -11.023438 -1.191406 -9.5625 -1.191406 -6.882812 C -1.191406 -4.3125 -3.128906 -2.25 -5.917969 -2.25 C -8.683594 -2.25 -10.664062 -4.3125 -10.664062 -6.882812 C -10.664062 -8.789062 -9.710938 -10.335938 -8.09375 -10.996094 L -8.09375 -12.5625 C -10.621094 -11.925781 -12.082031 -9.429688 -12.082031 -6.917969 C -12.082031 -3.460938 -9.363281 -0.710938 -5.917969 -0.710938 C -2.503906 -0.710938 0.226562 -3.460938 0.226562 -6.917969 Z M 0.226562 -6.917969 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 50.994529)">
					<g>
						<path d="M 0 -3.148438 L -5.234375 -3.148438 L -5.234375 -9.980469 L 0 -9.980469 L 0 -11.527344 L -11.820312 -11.527344 L -11.820312 -9.980469 L -6.613281 -9.980469 L -6.613281 -3.148438 L -11.820312 -3.148438 L -11.820312 -1.609375 L 0 -1.609375 Z M 0 -3.148438 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(511.217203, 37.8638)">
					<g>
						<path d="M 0 -5.703125 L -10.441406 -5.703125 L -10.441406 -9.449219 L -11.820312 -9.449219 L -11.820312 -0.425781 L -10.441406 -0.425781 L -10.441406 -4.164062 L 0 -4.164062 Z M 0 -5.703125 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 123.016867)">
					<g>
						<path d="M 0 -5.253906 L -0.792969 -5.253906 L -0.792969 -2.179688 L -0.714844 -1.738281 L -2.5 -3.742188 C -3.222656 -4.570312 -3.902344 -5.148438 -4.859375 -5.148438 C -6.113281 -5.148438 -7.085938 -4.207031 -7.085938 -2.800781 C -7.085938 -1.285156 -5.90625 -0.441406 -4.566406 -0.441406 L -4.566406 -1.347656 C -5.710938 -1.347656 -6.242188 -2.0625 -6.242188 -2.828125 C -6.242188 -3.621094 -5.671875 -4.238281 -4.859375 -4.238281 C -4.101562 -4.238281 -3.539062 -3.671875 -2.765625 -2.816406 L -0.550781 -0.378906 L 0 -0.378906 Z M 0 -5.253906 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 117.385184)">
					<g>
						<path d="M 0 -2.441406 L -6.996094 -2.441406 L -6.996094 -1.671875 L -6.394531 -0.183594 L -5.582031 -0.183594 L -6.125 -1.527344 L 0 -1.527344 Z M 0 -2.441406 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 113.993842)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 111.393813)">
					<g>
						<path d="M 0 -1.859375 L -5.527344 -1.859375 L -2.296875 -4.261719 L -2.296875 -4.523438 L -5.523438 -6.941406 L 0 -6.941406 L 0 -7.851562 L -6.992188 -7.851562 L -6.992188 -7.054688 L -3.464844 -4.402344 L -3.464844 -4.394531 L -6.992188 -1.738281 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -1.859375 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 102.596878)">
					<g>
						<path d="M 0 -6.859375 L -6.992188 -3.902344 L -6.992188 -3.027344 L 0 -0.0664062 L 0 -1.035156 L -1.582031 -1.695312 L -1.582031 -5.230469 L 0 -5.890625 Z M -5.710938 -3.429688 L -5.832031 -3.460938 L -5.832031 -3.46875 L -5.710938 -3.496094 L -2.355469 -4.90625 L -2.355469 -2.019531 Z M -5.710938 -3.429688 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 95.675457)">
					<g>
						<path d="M 0 -3.839844 L -2.683594 -3.835938 L -6.992188 -6.664062 L -6.992188 -5.582031 L -3.496094 -3.386719 L -3.496094 -3.382812 L -6.992188 -1.175781 L -6.992188 -0.101562 L -2.679688 -2.929688 L 0 -2.929688 Z M 0 -3.839844 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 88.908188)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 86.308159)">
					<g>
						<path d="M 0 -5.253906 L -0.792969 -5.253906 L -0.792969 -2.179688 L -0.714844 -1.738281 L -2.5 -3.742188 C -3.222656 -4.570312 -3.902344 -5.148438 -4.859375 -5.148438 C -6.113281 -5.148438 -7.085938 -4.207031 -7.085938 -2.800781 C -7.085938 -1.285156 -5.90625 -0.441406 -4.566406 -0.441406 L -4.566406 -1.347656 C -5.710938 -1.347656 -6.242188 -2.0625 -6.242188 -2.828125 C -6.242188 -3.621094 -5.671875 -4.238281 -4.859375 -4.238281 C -4.101562 -4.238281 -3.539062 -3.671875 -2.765625 -2.816406 L -0.550781 -0.378906 L 0 -0.378906 Z M 0 -5.253906 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 80.676476)">
					<g>
						<path d="M 0.148438 -3.335938 C 0.148438 -5.246094 -1.5 -6.257812 -3.492188 -6.257812 C -5.382812 -6.257812 -7.140625 -5.382812 -7.140625 -3.332031 C -7.140625 -1.484375 -5.507812 -0.417969 -3.464844 -0.417969 C -1.5 -0.417969 0.148438 -1.402344 0.148438 -3.335938 Z M -0.699219 -3.335938 C -0.699219 -2.070312 -1.886719 -1.328125 -3.46875 -1.328125 C -5.109375 -1.328125 -6.296875 -2.117188 -6.296875 -3.328125 C -6.296875 -4.660156 -5.039062 -5.347656 -3.492188 -5.347656 C -1.886719 -5.347656 -0.699219 -4.597656 -0.699219 -3.335938 Z M -0.699219 -3.335938 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 74.006837)">
					<g>
						<path d="M 0 -5.253906 L -0.792969 -5.253906 L -0.792969 -2.179688 L -0.714844 -1.738281 L -2.5 -3.742188 C -3.222656 -4.570312 -3.902344 -5.148438 -4.859375 -5.148438 C -6.113281 -5.148438 -7.085938 -4.207031 -7.085938 -2.800781 C -7.085938 -1.285156 -5.90625 -0.441406 -4.566406 -0.441406 L -4.566406 -1.347656 C -5.710938 -1.347656 -6.242188 -2.0625 -6.242188 -2.828125 C -6.242188 -3.621094 -5.671875 -4.238281 -4.859375 -4.238281 C -4.101562 -4.238281 -3.539062 -3.671875 -2.765625 -2.816406 L -0.550781 -0.378906 L 0 -0.378906 Z M 0 -5.253906 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(544.092861, 68.375154)">
					<g>
						<path d="M 0.148438 -2.816406 C 0.148438 -4.257812 -0.890625 -5.3125 -2.210938 -5.3125 C -3.589844 -5.3125 -4.277344 -4.375 -4.355469 -2.929688 L -4.433594 -2.992188 L -6.492188 -4.695312 L -6.992188 -4.695312 L -6.992188 -0.6875 L -6.242188 -0.6875 L -6.242188 -3.589844 L -6.210938 -3.566406 L -4.160156 -1.933594 L -3.691406 -1.933594 L -3.691406 -2.664062 C -3.691406 -3.722656 -3.078125 -4.394531 -2.230469 -4.394531 C -1.347656 -4.394531 -0.6875 -3.671875 -0.6875 -2.839844 C -0.6875 -2.148438 -1.058594 -1.265625 -2.246094 -1.246094 L -2.246094 -0.339844 C -0.5 -0.355469 0.148438 -1.640625 0.148438 -2.816406 Z M 0.148438 -2.816406 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(560.588059, 170.782475)">
					<g>
						<path d="M 0 -3.371094 L -6.175781 -3.371094 L -6.175781 -5.589844 L -6.992188 -5.589844 L -6.992188 -0.25 L -6.175781 -0.25 L -6.175781 -2.460938 L 0 -2.460938 Z M 0 -3.371094 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(560.588059, 164.940118)">
					<g>
						<path d="M 0 -1.859375 L -6.992188 -1.859375 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -1.859375 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(560.588059, 162.129415)">
					<g>
						<path d="M 0 -1.859375 L -5.527344 -1.859375 L -2.296875 -4.261719 L -2.296875 -4.523438 L -5.523438 -6.941406 L 0 -6.941406 L 0 -7.851562 L -6.992188 -7.851562 L -6.992188 -7.054688 L -3.464844 -4.402344 L -3.464844 -4.394531 L -6.992188 -1.738281 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -1.859375 " />
					</g>
				</g>
			</g>
			<g fill="#f6474b" fillOpacity="1">
				<g transform="translate(560.588059, 153.332479)">
					<g>
						<path d="M 0 -5.644531 L -0.824219 -5.644531 L -0.824219 -1.859375 L -3.167969 -1.859375 L -3.167969 -5.109375 L -3.949219 -5.109375 L -3.949219 -1.859375 L -6.164062 -1.859375 L -6.164062 -5.597656 L -6.992188 -5.597656 L -6.992188 -0.953125 L 0 -0.953125 Z M 0 -5.644531 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 121.099965)">
					<g>
						<path d="M 0 -1.867188 L -6.5 -5.019531 L -6.992188 -5.019531 L -6.992188 -0.304688 L -6.238281 -0.304688 L -6.238281 -3.9375 L 0 -0.894531 Z M 0 -1.867188 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 115.79714)">
					<g>
						<path d="M -4.289062 -1.328125 C -4.289062 -1.671875 -4.535156 -1.90625 -4.839844 -1.90625 C -5.140625 -1.90625 -5.394531 -1.671875 -5.394531 -1.328125 C -5.394531 -0.980469 -5.140625 -0.746094 -4.839844 -0.746094 C -4.539062 -0.746094 -4.289062 -0.980469 -4.289062 -1.328125 Z M 0.152344 -1.328125 C 0.152344 -1.671875 -0.09375 -1.90625 -0.394531 -1.90625 C -0.695312 -1.90625 -0.945312 -1.671875 -0.945312 -1.328125 C -0.945312 -0.980469 -0.695312 -0.746094 -0.394531 -0.746094 C -0.09375 -0.746094 0.152344 -0.980469 0.152344 -1.328125 Z M 0.152344 -1.328125 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 113.140588)">
					<g>
						<path d="M 0.148438 -2.816406 C 0.148438 -4.257812 -0.890625 -5.3125 -2.210938 -5.3125 C -3.589844 -5.3125 -4.277344 -4.375 -4.355469 -2.929688 L -4.433594 -2.992188 L -6.492188 -4.695312 L -6.992188 -4.695312 L -6.992188 -0.6875 L -6.242188 -0.6875 L -6.242188 -3.589844 L -6.210938 -3.566406 L -4.160156 -1.933594 L -3.691406 -1.933594 L -3.691406 -2.664062 C -3.691406 -3.722656 -3.078125 -4.394531 -2.230469 -4.394531 C -1.347656 -4.394531 -0.6875 -3.671875 -0.6875 -2.839844 C -0.6875 -2.148438 -1.058594 -1.265625 -2.246094 -1.246094 L -2.246094 -0.339844 C -0.5 -0.355469 0.148438 -1.640625 0.148438 -2.816406 Z M 0.148438 -2.816406 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 107.550013)">
					<g>
						<path d="M 0.148438 -3.335938 C 0.148438 -5.246094 -1.5 -6.257812 -3.492188 -6.257812 C -5.382812 -6.257812 -7.140625 -5.382812 -7.140625 -3.332031 C -7.140625 -1.484375 -5.507812 -0.417969 -3.464844 -0.417969 C -1.5 -0.417969 0.148438 -1.402344 0.148438 -3.335938 Z M -0.699219 -3.335938 C -0.699219 -2.070312 -1.886719 -1.328125 -3.46875 -1.328125 C -5.109375 -1.328125 -6.296875 -2.117188 -6.296875 -3.328125 C -6.296875 -4.660156 -5.039062 -5.347656 -3.492188 -5.347656 C -1.886719 -5.347656 -0.699219 -4.597656 -0.699219 -3.335938 Z M -0.699219 -3.335938 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 100.880373)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 98.280345)">
					<g>
						<path d="M 1.789062 -1.734375 L -0.503906 -1.734375 L -1.09375 -1.71875 C -0.335938 -2.085938 0.148438 -2.863281 0.148438 -3.726562 C 0.148438 -5.191406 -1.078125 -6.304688 -2.621094 -6.304688 C -4.15625 -6.304688 -5.386719 -5.199219 -5.386719 -3.71875 C -5.386719 -2.808594 -4.847656 -2.0625 -4.125 -1.695312 L -5.246094 -1.695312 L -5.246094 -0.847656 L 1.789062 -0.847656 Z M -0.671875 -3.574219 C -0.671875 -2.566406 -1.507812 -1.726562 -2.621094 -1.726562 C -3.707031 -1.726562 -4.566406 -2.550781 -4.566406 -3.574219 C -4.566406 -4.597656 -3.753906 -5.425781 -2.621094 -5.425781 C -1.464844 -5.425781 -0.671875 -4.582031 -0.671875 -3.574219 Z M -0.671875 -3.574219 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(560.590627, 91.569598)">
					<g>
						<path d="M -5.394531 -7.253906 C -5.394531 -6.441406 -4.941406 -5.734375 -4.046875 -5.328125 C -4.9375 -5.054688 -5.394531 -4.4375 -5.394531 -3.496094 C -5.394531 -2.652344 -4.890625 -1.957031 -4.230469 -1.691406 L -5.246094 -1.679688 L -5.246094 -0.847656 L 0 -0.847656 L 0 -1.722656 L -2.757812 -1.722656 C -3.824219 -1.722656 -4.566406 -2.457031 -4.566406 -3.261719 C -4.566406 -4.097656 -4.035156 -4.605469 -2.828125 -4.605469 L 0 -4.605469 L 0 -5.480469 L -2.757812 -5.480469 C -3.824219 -5.480469 -4.566406 -6.214844 -4.566406 -7.011719 C -4.566406 -7.855469 -4.03125 -8.367188 -2.828125 -8.367188 L 0 -8.367188 L 0 -9.246094 L -2.84375 -9.246094 C -4.519531 -9.246094 -5.394531 -8.554688 -5.394531 -7.253906 Z M -5.394531 -7.253906 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(573.015037, 122.897995)">
					<g>
						<path d="M -5.253906 -4.738281 L -5.253906 -3.929688 L -2.140625 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 L 0 -1.398438 L -1.230469 -1.398438 L -2.433594 -2.378906 L 0 -4.210938 L 0 -5.03125 L -2.9375 -2.828125 Z M -5.253906 -4.738281 " />
					</g>
				</g>
				<g transform="translate(573.015037, 117.781288)">
					<g>
						<path d="M 0 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -1.398438 " />
					</g>
				</g>
				<g transform="translate(573.015037, 115.667362)">
					<g>
						<path d="M 0 -1.398438 L -4.15625 -1.398438 L -1.726562 -3.203125 L -1.726562 -3.402344 L -4.152344 -5.21875 L 0 -5.21875 L 0 -5.902344 L -5.253906 -5.902344 L -5.253906 -5.300781 L -2.605469 -3.308594 L -2.605469 -3.304688 L -5.253906 -1.304688 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -1.398438 " />
					</g>
				</g>
				<g transform="translate(573.015037, 109.051197)">
					<g>
						<path d="M 0.113281 -2.355469 C 0.113281 -3.644531 -0.46875 -4.433594 -1.453125 -4.433594 C -2.53125 -4.433594 -2.851562 -3.453125 -2.992188 -2.582031 C -3.117188 -1.636719 -3.355469 -1.109375 -3.90625 -1.109375 C -4.339844 -1.109375 -4.769531 -1.371094 -4.769531 -2.324219 C -4.769531 -3.109375 -4.398438 -3.535156 -3.875 -3.535156 L -3.875 -4.222656 C -4.753906 -4.222656 -5.371094 -3.566406 -5.371094 -2.332031 C -5.371094 -0.960938 -4.695312 -0.425781 -3.910156 -0.425781 C -2.847656 -0.425781 -2.558594 -1.492188 -2.410156 -2.367188 C -2.292969 -3.152344 -2.070312 -3.742188 -1.453125 -3.742188 C -0.804688 -3.742188 -0.476562 -3.246094 -0.476562 -2.351562 C -0.476562 -1.484375 -0.96875 -0.972656 -1.523438 -0.972656 L -1.523438 -0.289062 C -0.726562 -0.289062 0.113281 -0.925781 0.113281 -2.355469 Z M 0.113281 -2.355469 " />
					</g>
				</g>
				<g transform="translate(573.015037, 104.348)">
					<g>
						<path d="M 0 -2.535156 L -4.640625 -2.535156 L -4.640625 -4.199219 L -5.253906 -4.199219 L -5.253906 -0.1875 L -4.640625 -0.1875 L -4.640625 -1.851562 L 0 -1.851562 Z M 0 -2.535156 " />
					</g>
				</g>
				<g transform="translate(573.015037, 99.95397)">
					<g>
						<path d="M 0.105469 -3.117188 C 0.105469 -4.671875 -1.113281 -5.933594 -2.632812 -5.933594 C -4.164062 -5.933594 -5.371094 -4.671875 -5.371094 -3.117188 C -5.371094 -1.570312 -4.164062 -0.3125 -2.632812 -0.3125 C -1.113281 -0.3125 0.105469 -1.570312 0.105469 -3.117188 Z M -0.53125 -3.117188 C -0.53125 -1.949219 -1.4375 -0.996094 -2.632812 -0.996094 C -3.828125 -0.996094 -4.742188 -1.945312 -4.742188 -3.117188 C -4.742188 -4.296875 -3.828125 -5.25 -2.632812 -5.25 C -1.4375 -5.25 -0.53125 -4.296875 -0.53125 -3.117188 Z M -0.53125 -3.117188 " />
					</g>
				</g>
				<g transform="translate(573.015037, 93.708806)">
					<g>
						<path d="M -1.136719 -4.53125 L -1.136719 -4.527344 L -5.253906 -1.289062 L -5.253906 -0.714844 L 0 -0.714844 L 0 -1.398438 L -4.109375 -1.398438 L 0 -4.632812 L 0 -5.214844 L -5.253906 -5.214844 L -5.253906 -4.53125 Z M -1.136719 -4.53125 " />
					</g>
				</g>
				<g transform="translate(573.015037, 87.780537)">
					<g>
						<path d="M 0 -4.242188 L -0.617188 -4.242188 L -0.617188 -1.398438 L -2.378906 -1.398438 L -2.378906 -3.839844 L -2.96875 -3.839844 L -2.96875 -1.398438 L -4.632812 -1.398438 L -4.632812 -4.207031 L -5.253906 -4.207031 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -4.242188 " />
					</g>
				</g>
				<g transform="translate(573.015037, 83.258975)">
					<g />
				</g>
				<g transform="translate(573.015037, 81.303497)">
					<g>
						<path d="M 0 -3.179688 C 0 -4 -0.535156 -4.765625 -1.484375 -4.765625 C -2.097656 -4.765625 -2.617188 -4.320312 -2.777344 -3.765625 C -2.949219 -4.15625 -3.390625 -4.460938 -3.871094 -4.460938 C -4.695312 -4.460938 -5.253906 -3.832031 -5.253906 -2.960938 L -5.253906 -0.714844 L 0 -0.714844 Z M -4.660156 -1.40625 L -4.660156 -2.933594 C -4.660156 -3.398438 -4.289062 -3.769531 -3.820312 -3.769531 C -3.347656 -3.769531 -2.976562 -3.398438 -2.976562 -2.929688 L -2.976562 -1.40625 Z M -2.445312 -1.40625 L -2.445312 -3.132812 C -2.445312 -3.65625 -2.035156 -4.0625 -1.535156 -4.0625 C -1 -4.0625 -0.601562 -3.652344 -0.601562 -3.125 L -0.601562 -1.40625 Z M -2.445312 -1.40625 " />
					</g>
				</g>
				<g transform="translate(573.015037, 76.2293)">
					<g>
						<path d="M 0 -5.15625 L -5.253906 -2.933594 L -5.253906 -2.277344 L 0 -0.0507812 L 0 -0.777344 L -1.191406 -1.273438 L -1.191406 -3.929688 L 0 -4.429688 Z M -4.292969 -2.578125 L -4.382812 -2.601562 L -4.382812 -2.609375 L -4.292969 -2.628906 L -1.769531 -3.6875 L -1.769531 -1.519531 Z M -4.292969 -2.578125 " />
					</g>
				</g>
				<g transform="translate(573.015037, 71.023708)">
					<g>
						<path d="M 0 -3.953125 L -0.617188 -3.953125 L -0.617188 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -3.953125 " />
					</g>
				</g>
				<g transform="translate(573.015037, 66.915657)">
					<g>
						<path d="M 0 -3.953125 L -0.617188 -3.953125 L -0.617188 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -3.953125 " />
					</g>
				</g>
				<g transform="translate(573.015037, 62.807606)">
					<g>
						<path d="M 0 -1.398438 L -1.976562 -1.398438 L -1.976562 -2.683594 C -1.976562 -2.738281 -1.976562 -2.792969 -1.980469 -2.851562 L 0 -4.019531 L 0 -4.808594 L -2.078125 -3.539062 C -2.265625 -4.230469 -2.832031 -4.691406 -3.605469 -4.691406 C -4.59375 -4.691406 -5.253906 -3.964844 -5.253906 -2.949219 L -5.253906 -0.714844 L 0 -0.714844 Z M -4.640625 -1.398438 L -4.640625 -2.921875 C -4.640625 -3.539062 -4.199219 -4.007812 -3.601562 -4.007812 C -2.980469 -4.007812 -2.5625 -3.546875 -2.558594 -2.933594 L -2.558594 -1.398438 Z M -4.640625 -1.398438 " />
					</g>
				</g>
				<g transform="translate(573.015037, 57.760462)">
					<g>
						<path d="M 0.105469 -3.117188 C 0.105469 -4.671875 -1.113281 -5.933594 -2.632812 -5.933594 C -4.164062 -5.933594 -5.371094 -4.671875 -5.371094 -3.117188 C -5.371094 -1.570312 -4.164062 -0.3125 -2.632812 -0.3125 C -1.113281 -0.3125 0.105469 -1.570312 0.105469 -3.117188 Z M -0.53125 -3.117188 C -0.53125 -1.949219 -1.4375 -0.996094 -2.632812 -0.996094 C -3.828125 -0.996094 -4.742188 -1.945312 -4.742188 -3.117188 C -4.742188 -4.296875 -3.828125 -5.25 -2.632812 -5.25 C -1.4375 -5.25 -0.53125 -4.296875 -0.53125 -3.117188 Z M -0.53125 -3.117188 " />
					</g>
				</g>
				<g transform="translate(573.015037, 51.515297)">
					<g>
						<path d="M 0.105469 -3.117188 C 0.105469 -4.671875 -1.113281 -5.933594 -2.632812 -5.933594 C -4.164062 -5.933594 -5.371094 -4.671875 -5.371094 -3.117188 C -5.371094 -1.570312 -4.164062 -0.3125 -2.632812 -0.3125 C -1.113281 -0.3125 0.105469 -1.570312 0.105469 -3.117188 Z M -0.53125 -3.117188 C -0.53125 -1.949219 -1.4375 -0.996094 -2.632812 -0.996094 C -3.828125 -0.996094 -4.742188 -1.945312 -4.742188 -3.117188 C -4.742188 -4.296875 -3.828125 -5.25 -2.632812 -5.25 C -1.4375 -5.25 -0.53125 -4.296875 -0.53125 -3.117188 Z M -0.53125 -3.117188 " />
					</g>
				</g>
				<g transform="translate(573.015037, 45.270132)">
					<g>
						<path d="M 0 -1.398438 L -4.15625 -1.398438 L -1.726562 -3.203125 L -1.726562 -3.402344 L -4.152344 -5.21875 L 0 -5.21875 L 0 -5.902344 L -5.253906 -5.902344 L -5.253906 -5.300781 L -2.605469 -3.308594 L -2.605469 -3.304688 L -5.253906 -1.304688 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -1.398438 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(573.015037, 38.660409)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(583.567922, 122.897995)">
					<g>
						<path d="M -5.253906 -4.738281 L -5.253906 -3.929688 L -2.140625 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 L 0 -1.398438 L -1.230469 -1.398438 L -2.433594 -2.378906 L 0 -4.210938 L 0 -5.03125 L -2.9375 -2.828125 Z M -5.253906 -4.738281 " />
					</g>
				</g>
				<g transform="translate(583.567922, 117.781288)">
					<g>
						<path d="M 0.105469 -3.117188 C 0.105469 -4.671875 -1.113281 -5.933594 -2.632812 -5.933594 C -4.164062 -5.933594 -5.371094 -4.671875 -5.371094 -3.117188 C -5.371094 -1.570312 -4.164062 -0.3125 -2.632812 -0.3125 C -1.113281 -0.3125 0.105469 -1.570312 0.105469 -3.117188 Z M -0.53125 -3.117188 C -0.53125 -1.949219 -1.4375 -0.996094 -2.632812 -0.996094 C -3.828125 -0.996094 -4.742188 -1.945312 -4.742188 -3.117188 C -4.742188 -4.296875 -3.828125 -5.25 -2.632812 -5.25 C -1.4375 -5.25 -0.53125 -4.296875 -0.53125 -3.117188 Z M -0.53125 -3.117188 " />
					</g>
				</g>
				<g transform="translate(583.567922, 111.536123)">
					<g>
						<path d="M 0 -1.398438 L -4.15625 -1.398438 L -1.726562 -3.203125 L -1.726562 -3.402344 L -4.152344 -5.21875 L 0 -5.21875 L 0 -5.902344 L -5.253906 -5.902344 L -5.253906 -5.300781 L -2.605469 -3.308594 L -2.605469 -3.304688 L -5.253906 -1.304688 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -1.398438 " />
					</g>
				</g>
				<g transform="translate(583.567922, 104.919958)">
					<g>
						<path d="M 0 -1.398438 L -1.796875 -1.398438 L -1.796875 -2.886719 C -1.796875 -3.894531 -2.511719 -4.617188 -3.539062 -4.617188 C -4.53125 -4.617188 -5.253906 -3.890625 -5.253906 -2.871094 L -5.253906 -0.714844 L 0 -0.714844 Z M -4.640625 -1.398438 L -4.640625 -2.847656 C -4.640625 -3.464844 -4.140625 -3.933594 -3.535156 -3.933594 C -2.898438 -3.933594 -2.414062 -3.46875 -2.414062 -2.855469 L -2.414062 -1.398438 Z M -4.640625 -1.398438 " />
					</g>
				</g>
				<g transform="translate(583.567922, 100.143335)">
					<g>
						<path d="M 0 -3.953125 L -0.617188 -3.953125 L -0.617188 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -3.953125 " />
					</g>
				</g>
				<g transform="translate(583.567922, 96.035284)">
					<g>
						<path d="M 0 -4.242188 L -0.617188 -4.242188 L -0.617188 -1.398438 L -2.378906 -1.398438 L -2.378906 -3.839844 L -2.96875 -3.839844 L -2.96875 -1.398438 L -4.632812 -1.398438 L -4.632812 -4.207031 L -5.253906 -4.207031 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -4.242188 " />
					</g>
				</g>
				<g transform="translate(583.567922, 91.513723)">
					<g>
						<path d="M -5.253906 -4.738281 L -5.253906 -3.929688 L -2.140625 -1.398438 L -5.253906 -1.398438 L -5.253906 -0.714844 L 0 -0.714844 L 0 -1.398438 L -1.230469 -1.398438 L -2.433594 -2.378906 L 0 -4.210938 L 0 -5.03125 L -2.9375 -2.828125 Z M -5.253906 -4.738281 " />
					</g>
				</g>
				<g transform="translate(583.567922, 86.397016)">
					<g>
						<path d="M 0.113281 -2.355469 C 0.113281 -3.644531 -0.46875 -4.433594 -1.453125 -4.433594 C -2.53125 -4.433594 -2.851562 -3.453125 -2.992188 -2.582031 C -3.117188 -1.636719 -3.355469 -1.109375 -3.90625 -1.109375 C -4.339844 -1.109375 -4.769531 -1.371094 -4.769531 -2.324219 C -4.769531 -3.109375 -4.398438 -3.535156 -3.875 -3.535156 L -3.875 -4.222656 C -4.753906 -4.222656 -5.371094 -3.566406 -5.371094 -2.332031 C -5.371094 -0.960938 -4.695312 -0.425781 -3.910156 -0.425781 C -2.847656 -0.425781 -2.558594 -1.492188 -2.410156 -2.367188 C -2.292969 -3.152344 -2.070312 -3.742188 -1.453125 -3.742188 C -0.804688 -3.742188 -0.476562 -3.246094 -0.476562 -2.351562 C -0.476562 -1.484375 -0.96875 -0.972656 -1.523438 -0.972656 L -1.523438 -0.289062 C -0.726562 -0.289062 0.113281 -0.925781 0.113281 -2.355469 Z M 0.113281 -2.355469 " />
					</g>
				</g>
				<g transform="translate(583.567922, 81.69382)">
					<g />
				</g>
				<g transform="translate(583.567922, 79.738341)">
					<g>
						<path d="M 0 -2.535156 L -4.640625 -2.535156 L -4.640625 -4.199219 L -5.253906 -4.199219 L -5.253906 -0.1875 L -4.640625 -0.1875 L -4.640625 -1.851562 L 0 -1.851562 Z M 0 -2.535156 " />
					</g>
				</g>
				<g transform="translate(583.567922, 75.344311)">
					<g>
						<path d="M 0 -4.242188 L -0.617188 -4.242188 L -0.617188 -1.398438 L -2.378906 -1.398438 L -2.378906 -3.839844 L -2.96875 -3.839844 L -2.96875 -1.398438 L -4.632812 -1.398438 L -4.632812 -4.207031 L -5.253906 -4.207031 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -4.242188 " />
					</g>
				</g>
				<g transform="translate(583.567922, 70.82275)">
					<g>
						<path d="M 0 -1.398438 L -1.976562 -1.398438 L -1.976562 -2.683594 C -1.976562 -2.738281 -1.976562 -2.792969 -1.980469 -2.851562 L 0 -4.019531 L 0 -4.808594 L -2.078125 -3.539062 C -2.265625 -4.230469 -2.832031 -4.691406 -3.605469 -4.691406 C -4.59375 -4.691406 -5.253906 -3.964844 -5.253906 -2.949219 L -5.253906 -0.714844 L 0 -0.714844 Z M -4.640625 -1.398438 L -4.640625 -2.921875 C -4.640625 -3.539062 -4.199219 -4.007812 -3.601562 -4.007812 C -2.980469 -4.007812 -2.5625 -3.546875 -2.558594 -2.933594 L -2.558594 -1.398438 Z M -4.640625 -1.398438 " />
					</g>
				</g>
				<g transform="translate(583.567922, 65.775606)">
					<g>
						<path d="M 0.109375 -2.789062 C 0.109375 -4.0625 -0.769531 -4.964844 -2.035156 -4.964844 L -5.257812 -4.964844 L -5.257812 -4.28125 L -2.078125 -4.28125 C -1.222656 -4.28125 -0.527344 -3.726562 -0.527344 -2.789062 C -0.527344 -1.832031 -1.234375 -1.292969 -2.085938 -1.292969 L -5.257812 -1.292969 L -5.257812 -0.613281 L -2.035156 -0.613281 C -0.734375 -0.613281 0.109375 -1.566406 0.109375 -2.789062 Z M 0.109375 -2.789062 " />
					</g>
				</g>
				<g transform="translate(583.567922, 60.195149)">
					<g>
						<path d="M -1.136719 -4.53125 L -1.136719 -4.527344 L -5.253906 -1.289062 L -5.253906 -0.714844 L 0 -0.714844 L 0 -1.398438 L -4.109375 -1.398438 L 0 -4.632812 L 0 -5.214844 L -5.253906 -5.214844 L -5.253906 -4.53125 Z M -1.136719 -4.53125 " />
					</g>
				</g>
				<g transform="translate(583.567922, 54.26688)">
					<g>
						<path d="M 0 -2.535156 L -4.640625 -2.535156 L -4.640625 -4.199219 L -5.253906 -4.199219 L -5.253906 -0.1875 L -4.640625 -0.1875 L -4.640625 -1.851562 L 0 -1.851562 Z M 0 -2.535156 " />
					</g>
				</g>
				<g transform="translate(583.567922, 49.87285)">
					<g>
						<path d="M 0.109375 -2.789062 C 0.109375 -4.0625 -0.769531 -4.964844 -2.035156 -4.964844 L -5.257812 -4.964844 L -5.257812 -4.28125 L -2.078125 -4.28125 C -1.222656 -4.28125 -0.527344 -3.726562 -0.527344 -2.789062 C -0.527344 -1.832031 -1.234375 -1.292969 -2.085938 -1.292969 L -5.257812 -1.292969 L -5.257812 -0.613281 L -2.035156 -0.613281 C -0.734375 -0.613281 0.109375 -1.566406 0.109375 -2.789062 Z M 0.109375 -2.789062 " />
					</g>
				</g>
				<g transform="translate(583.567922, 44.292393)">
					<g>
						<path d="M 0 -1.398438 L -4.15625 -1.398438 L -1.726562 -3.203125 L -1.726562 -3.402344 L -4.152344 -5.21875 L 0 -5.21875 L 0 -5.902344 L -5.253906 -5.902344 L -5.253906 -5.300781 L -2.605469 -3.308594 L -2.605469 -3.304688 L -5.253906 -1.304688 L -5.253906 -0.714844 L 0 -0.714844 Z M 0 -1.398438 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(182.73064, 150.144203)">
					<g>
						<path d="M 2.617188 -5.40625 L 3.257812 -5.40625 L 3.257812 -4.058594 L 3.898438 -4.058594 L 3.898438 -2.714844 L 4.539062 -2.714844 L 4.539062 -1.355469 L 5.179688 -1.355469 L 5.179688 -6.746094 L 6.492188 -6.746094 L 6.492188 0 L 4.53125 0 L 4.53125 -1.347656 L 3.890625 -1.347656 L 3.890625 -2.703125 L 3.25 -2.703125 L 3.25 -4.050781 L 2.609375 -4.050781 L 2.609375 -5.398438 L 1.96875 -5.398438 L 1.96875 0 L 0.660156 0 L 0.660156 -6.746094 L 2.617188 -6.746094 Z M 2.617188 -5.40625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(189.880353, 150.144203)">
					<g>
						<path d="M 5.257812 0 L 5.257812 -2.25 L 1.96875 -2.25 L 1.96875 0 L 0.660156 0 L 0.660156 -5.445312 L 1.308594 -5.445312 L 1.308594 -6.09375 L 1.96875 -6.09375 L 1.96875 -6.746094 L 5.257812 -6.746094 L 5.257812 -6.09375 L 5.914062 -6.09375 L 5.914062 -5.445312 L 6.566406 -5.445312 L 6.566406 0 Z M 1.96875 -2.902344 L 5.257812 -2.902344 L 5.257812 -5.445312 L 4.585938 -5.445312 L 4.585938 -6.09375 L 2.636719 -6.09375 L 2.636719 -5.445312 L 1.96875 -5.445312 Z M 1.96875 -2.902344 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(197.105419, 150.144203)">
					<g>
						<path d="M 3.890625 -1.382812 L 3.890625 -2.722656 L 3.25 -2.722656 L 3.25 -4.058594 L 2.609375 -4.058594 L 2.609375 -5.398438 L 1.96875 -5.398438 L 1.96875 0 L 0.660156 0 L 0.660156 -6.746094 L 2.617188 -6.746094 L 2.617188 -5.40625 L 3.257812 -5.40625 L 3.257812 -4.070312 L 3.898438 -4.070312 L 3.898438 -2.730469 L 5.179688 -2.730469 L 5.179688 -4.070312 L 5.820312 -4.070312 L 5.820312 -5.40625 L 6.460938 -5.40625 L 6.460938 -6.746094 L 8.421875 -6.746094 L 8.421875 0 L 7.113281 0 L 7.113281 -5.398438 L 6.472656 -5.398438 L 6.472656 -4.058594 L 5.832031 -4.058594 L 5.832031 -2.722656 L 5.191406 -2.722656 L 5.191406 -1.382812 Z M 3.890625 -1.382812 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(206.186208, 150.144203)">
					<g>
						<path d="M 5.90625 0 L 0.660156 0 L 0.660156 -6.746094 L 5.90625 -6.746094 L 5.90625 -6.09375 L 1.96875 -6.09375 L 1.96875 -4.023438 L 5.90625 -4.023438 L 5.90625 -3.371094 L 1.96875 -3.371094 L 1.96875 -0.648438 L 5.90625 -0.648438 Z M 5.90625 0 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(212.751885, 150.144203)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(215.389461, 150.144203)">
					<g>
						<path d="M 1.96875 -2.242188 L 1.96875 -0.941406 L 0.660156 -0.941406 L 0.660156 -2.242188 Z M 1.96875 -5.800781 L 1.96875 -4.503906 L 0.660156 -4.503906 L 0.660156 -5.800781 Z M 1.96875 -5.800781 " />
					</g>
				</g>
			</g>
			<text
				transform="translate(220.389461, 150.144203)"
				color="black"
				font-family="Courier New, monospace"
				id="name"
				font-size="0.7em"
			>
				{name}
			</text>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(182.73064, 163.096552)">
					<g>
						<path d="M 5.914062 0 L 1.96875 0 L 1.96875 -0.648438 L 1.308594 -0.648438 L 1.308594 -1.300781 L 0.660156 -1.300781 L 0.660156 -5.445312 L 1.308594 -5.445312 L 1.308594 -6.09375 L 1.96875 -6.09375 L 1.96875 -6.746094 L 5.914062 -6.746094 L 5.914062 -6.09375 L 2.636719 -6.09375 L 2.636719 -5.445312 L 1.96875 -5.445312 L 1.96875 -1.300781 L 2.636719 -1.300781 L 2.636719 -0.648438 L 5.914062 -0.648438 Z M 5.914062 0 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(189.305741, 163.096552)">
					<g>
						<path d="M 1.96875 -0.648438 L 1.308594 -0.648438 L 1.308594 -1.300781 L 0.660156 -1.300781 L 0.660156 -5.445312 L 1.308594 -5.445312 L 1.308594 -6.09375 L 1.96875 -6.09375 L 1.96875 -6.746094 L 5.257812 -6.746094 L 5.257812 -6.09375 L 5.914062 -6.09375 L 5.914062 -5.445312 L 6.566406 -5.445312 L 6.566406 -1.300781 L 5.914062 -1.300781 L 5.914062 -0.648438 L 5.257812 -0.648438 L 5.257812 0 L 1.96875 0 Z M 2.636719 -0.648438 L 4.585938 -0.648438 L 4.585938 -1.300781 L 5.257812 -1.300781 L 5.257812 -5.445312 L 4.585938 -5.445312 L 4.585938 -6.09375 L 2.636719 -6.09375 L 2.636719 -5.445312 L 1.96875 -5.445312 L 1.96875 -1.300781 L 2.636719 -1.300781 Z M 2.636719 -0.648438 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(196.530807, 163.096552)">
					<g>
						<path d="M 2.617188 -5.40625 L 3.257812 -5.40625 L 3.257812 -4.058594 L 3.898438 -4.058594 L 3.898438 -2.714844 L 4.539062 -2.714844 L 4.539062 -1.355469 L 5.179688 -1.355469 L 5.179688 -6.746094 L 6.492188 -6.746094 L 6.492188 0 L 4.53125 0 L 4.53125 -1.347656 L 3.890625 -1.347656 L 3.890625 -2.703125 L 3.25 -2.703125 L 3.25 -4.050781 L 2.609375 -4.050781 L 2.609375 -5.398438 L 1.96875 -5.398438 L 1.96875 0 L 0.660156 0 L 0.660156 -6.746094 L 2.617188 -6.746094 Z M 2.617188 -5.40625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(203.68052, 163.096552)">
					<g>
						<path d="M 6.113281 -6.09375 L 4.042969 -6.09375 L 4.042969 0 L 2.730469 0 L 2.730469 -6.09375 L 0.660156 -6.09375 L 0.660156 -6.746094 L 6.113281 -6.746094 Z M 6.113281 -6.09375 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(210.453437, 163.096552)">
					<g>
						<path d="M 5.257812 0 L 5.257812 -2.25 L 1.96875 -2.25 L 1.96875 0 L 0.660156 0 L 0.660156 -5.445312 L 1.308594 -5.445312 L 1.308594 -6.09375 L 1.96875 -6.09375 L 1.96875 -6.746094 L 5.257812 -6.746094 L 5.257812 -6.09375 L 5.914062 -6.09375 L 5.914062 -5.445312 L 6.566406 -5.445312 L 6.566406 0 Z M 1.96875 -2.902344 L 5.257812 -2.902344 L 5.257812 -5.445312 L 4.585938 -5.445312 L 4.585938 -6.09375 L 2.636719 -6.09375 L 2.636719 -5.445312 L 1.96875 -5.445312 Z M 1.96875 -2.902344 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(217.678503, 163.096552)">
					<g>
						<path d="M 5.914062 0 L 1.96875 0 L 1.96875 -0.648438 L 1.308594 -0.648438 L 1.308594 -1.300781 L 0.660156 -1.300781 L 0.660156 -5.445312 L 1.308594 -5.445312 L 1.308594 -6.09375 L 1.96875 -6.09375 L 1.96875 -6.746094 L 5.914062 -6.746094 L 5.914062 -6.09375 L 2.636719 -6.09375 L 2.636719 -5.445312 L 1.96875 -5.445312 L 1.96875 -1.300781 L 2.636719 -1.300781 L 2.636719 -0.648438 L 5.914062 -0.648438 Z M 5.914062 0 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(224.253604, 163.096552)">
					<g>
						<path d="M 6.113281 -6.09375 L 4.042969 -6.09375 L 4.042969 0 L 2.730469 0 L 2.730469 -6.09375 L 0.660156 -6.09375 L 0.660156 -6.746094 L 6.113281 -6.746094 Z M 6.113281 -6.09375 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(231.026521, 163.096552)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(233.664096, 163.096552)">
					<g>
						<path d="M 1.96875 -2.242188 L 1.96875 -0.941406 L 0.660156 -0.941406 L 0.660156 -2.242188 Z M 1.96875 -5.800781 L 1.96875 -4.503906 L 0.660156 -4.503906 L 0.660156 -5.800781 Z M 1.96875 -5.800781 " />
					</g>
				</g>
			</g>
			<text
				transform="translate(238.389461, 163.096552)"
				color="black"
				font-family="Courier New, monospace"
				id="contact"
				font-size="0.7em"
			>
				{contact}
			</text>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(182.73064, 176.0489)">
					<g>
						<path d="M 0.660156 -6.746094 L 1.96875 -6.746094 L 1.96875 0 L 0.660156 0 Z M 0.660156 -6.746094 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(185.358792, 176.0489)">
					<g>
						<path d="M 5.914062 0 L 1.96875 0 L 1.96875 -0.648438 L 1.308594 -0.648438 L 1.308594 -1.300781 L 0.660156 -1.300781 L 0.660156 -5.445312 L 1.308594 -5.445312 L 1.308594 -6.09375 L 1.96875 -6.09375 L 1.96875 -6.746094 L 5.914062 -6.746094 L 5.914062 -6.09375 L 2.636719 -6.09375 L 2.636719 -5.445312 L 1.96875 -5.445312 L 1.96875 -1.300781 L 2.636719 -1.300781 L 2.636719 -0.648438 L 5.914062 -0.648438 Z M 5.914062 0 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(191.933893, 176.0489)">
					<g />
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(194.571468, 176.0489)">
					<g>
						<path d="M 2.617188 -5.40625 L 3.257812 -5.40625 L 3.257812 -4.058594 L 3.898438 -4.058594 L 3.898438 -2.714844 L 4.539062 -2.714844 L 4.539062 -1.355469 L 5.179688 -1.355469 L 5.179688 -6.746094 L 6.492188 -6.746094 L 6.492188 0 L 4.53125 0 L 4.53125 -1.347656 L 3.890625 -1.347656 L 3.890625 -2.703125 L 3.25 -2.703125 L 3.25 -4.050781 L 2.609375 -4.050781 L 2.609375 -5.398438 L 1.96875 -5.398438 L 1.96875 0 L 0.660156 0 L 0.660156 -6.746094 L 2.617188 -6.746094 Z M 2.617188 -5.40625 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(201.721181, 176.0489)">
					<g>
						<path d="M 6.566406 -6.746094 L 6.566406 -1.300781 L 5.914062 -1.300781 L 5.914062 -0.648438 L 5.257812 -0.648438 L 5.257812 0 L 1.96875 0 L 1.96875 -0.648438 L 1.308594 -0.648438 L 1.308594 -1.300781 L 0.660156 -1.300781 L 0.660156 -6.746094 L 1.96875 -6.746094 L 1.96875 -1.300781 L 2.636719 -1.300781 L 2.636719 -0.648438 L 4.585938 -0.648438 L 4.585938 -1.300781 L 5.257812 -1.300781 L 5.257812 -6.746094 Z M 6.566406 -6.746094 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(208.946247, 176.0489)">
					<g>
						<path d="M 3.890625 -1.382812 L 3.890625 -2.722656 L 3.25 -2.722656 L 3.25 -4.058594 L 2.609375 -4.058594 L 2.609375 -5.398438 L 1.96875 -5.398438 L 1.96875 0 L 0.660156 0 L 0.660156 -6.746094 L 2.617188 -6.746094 L 2.617188 -5.40625 L 3.257812 -5.40625 L 3.257812 -4.070312 L 3.898438 -4.070312 L 3.898438 -2.730469 L 5.179688 -2.730469 L 5.179688 -4.070312 L 5.820312 -4.070312 L 5.820312 -5.40625 L 6.460938 -5.40625 L 6.460938 -6.746094 L 8.421875 -6.746094 L 8.421875 0 L 7.113281 0 L 7.113281 -5.398438 L 6.472656 -5.398438 L 6.472656 -4.058594 L 5.832031 -4.058594 L 5.832031 -2.722656 L 5.191406 -2.722656 L 5.191406 -1.382812 Z M 3.890625 -1.382812 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(218.027036, 176.0489)">
					<g>
						<path d="M 0.660156 -6.746094 L 5.90625 -6.746094 L 5.90625 -6.09375 L 6.566406 -6.09375 L 6.566406 -4.023438 L 5.90625 -4.023438 L 5.90625 -3.371094 L 6.566406 -3.371094 L 6.566406 -0.648438 L 5.90625 -0.648438 L 5.90625 0 L 0.660156 0 Z M 1.96875 -3.371094 L 1.96875 -0.648438 L 5.257812 -0.648438 L 5.257812 -3.371094 Z M 1.96875 -4.023438 L 5.257812 -4.023438 L 5.257812 -6.09375 L 1.96875 -6.09375 Z M 1.96875 -4.023438 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(225.252102, 176.0489)">
					<g>
						<path d="M 5.90625 0 L 0.660156 0 L 0.660156 -6.746094 L 5.90625 -6.746094 L 5.90625 -6.09375 L 1.96875 -6.09375 L 1.96875 -4.023438 L 5.90625 -4.023438 L 5.90625 -3.371094 L 1.96875 -3.371094 L 1.96875 -0.648438 L 5.90625 -0.648438 Z M 5.90625 0 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(231.817779, 176.0489)">
					<g>
						<path d="M 1.96875 -3.371094 L 5.257812 -3.371094 L 5.257812 -6.09375 L 1.96875 -6.09375 Z M 1.96875 -2.722656 L 1.96875 0 L 0.660156 0 L 0.660156 -6.746094 L 5.90625 -6.746094 L 5.90625 -6.09375 L 6.566406 -6.09375 L 6.566406 -3.371094 L 5.90625 -3.371094 L 5.90625 -2.722656 L 4.605469 -2.722656 L 4.605469 -2.035156 L 5.246094 -2.035156 L 5.246094 -1.355469 L 5.914062 -1.355469 L 5.914062 -0.679688 L 6.554688 -0.679688 L 6.554688 0 L 5.246094 0 L 5.246094 -0.679688 L 4.585938 -0.679688 L 4.585938 -1.355469 L 3.9375 -1.355469 L 3.9375 -2.035156 L 3.277344 -2.035156 L 3.277344 -2.722656 Z M 1.96875 -2.722656 " />
					</g>
				</g>
			</g>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(239.042845, 176.0489)">
					<g>
						<path d="M 1.96875 -2.242188 L 1.96875 -0.941406 L 0.660156 -0.941406 L 0.660156 -2.242188 Z M 1.96875 -5.800781 L 1.96875 -4.503906 L 0.660156 -4.503906 L 0.660156 -5.800781 Z M 1.96875 -5.800781 " />
					</g>
				</g>
			</g>
			<text
				transform="translate(244.042845, 176.0489)"
				color="black"
				font-family="Courier New, monospace"
				id="icnum"
				font-size="0.7em"
			>
				{icnum}
			</text>
			<g fill="#000000" fillOpacity="1">
				<g transform="translate(241.669344, 176.0489)">
					<g />
				</g>
			</g>
			<g clipPath="url(#39f4de1406)">
				<g transform="matrix(0.391667, 0, 0, 0.391667, 412.024589, 123.018302)">
					<QRCodeSVG
						value={qrcode}
						className="mx-auto mb-8 w-64 h-64"
						width="180"
						height="180"
					/>
				</g>
			</g>
		</svg>
	);
};
