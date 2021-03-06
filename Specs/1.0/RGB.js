describe('RGB Color Parsing', function(){
	var acceptableDiff = 3;
	beforeEach(function() {
	  this.addMatchers({
		toRoughlyEqual: function(expected){
			return isNaN(this.actual) == isNaN(expected) && Math.abs(expected - this.actual) <= acceptableDiff;
		}
	  });
	});
	function expectEqualColors(c, c2){
		expect(c.red).toRoughlyEqual(c2.red);
		expect(c.green).toRoughlyEqual(c2.green);
		expect(c.blue).toRoughlyEqual(c2.blue);
		expect(c.alpha).toEqual(c2.alpha);
	}
	function equalColors(){
		var colors = Array.prototype.slice.call(arguments);
		it('should parse the colors ' + colors.join(', ') + ' as equivalents', function(){
			var c = new Color(colors[0]);
			for (var i = 1, l = colors.length; i < l; i++){
				expectEqualColors(c, new Color(colors[i]));
			}
		});
		it('should parse the color ' + colors[0] + ' equivalently after being serialized as HEX', function(){
			var c = new Color(colors[0]);
			expectEqualColors(c, new Color(c.toHEX()));
		});
		it('should parse the color ' + colors[0] + ' equivalently after being serialized as RGB', function(){
			var c = new Color(colors[0]);
			expectEqualColors(c, new Color(c.toRGB()));
		});
		it('should parse the color ' + colors[0] + ' equivalently after being serialized as HSB', function(){
			var c = new Color(colors[0]);
			expectEqualColors(c, new Color(c.toHSB()));
		});
		it('should parse the color ' + colors[0] + ' equivalently after being serialized as HSL', function(){
			var c = new Color(colors[0]);
			expectEqualColors(c, new Color(c.toHSL()));
		});
	}
	equalColors('#ff0000', '#f00', 'rgb(255, 0, 0)', 'rgb(100%, 0%, 0%)');
	equalColors('#ee0000', '#e00', 'rgb(238, 0, 0)', 'rgb(93.3%, 0%, 0%)');
	equalColors('#dd0000', '#d00', 'rgb(221, 0, 0)', 'rgb(86.7%, 0%, 0%)');
	equalColors('#cc0000', '#c00', 'rgb(204, 0, 0)', 'rgb(80%, 0%, 0%)');
	equalColors('#bb0000', '#b00', 'rgb(187, 0, 0)', 'rgb(73.3%, 0%, 0%)');
	equalColors('#aa0000', '#a00', 'rgb(170, 0, 0)', 'rgb(66.7%, 0%, 0%)');
	equalColors('#990000', '#900', 'rgb(153, 0, 0)', 'rgb(60%, 0%, 0%)');
	equalColors('#880000', '#800', 'rgb(136, 0, 0)', 'rgb(53.3%, 0%, 0%)');
	equalColors('#770000', '#700', 'rgb(119, 0, 0)', 'rgb(46.7%, 0%, 0%)');
	equalColors('#660000', '#600', 'rgb(102, 0, 0)', 'rgb(40%, 0%, 0%)');
	equalColors('#550000', '#500', 'rgb(85, 0, 0)', 'rgb(33.3%, 0%, 0%)');
	equalColors('#440000', '#400', 'rgb(68, 0, 0)', 'rgb(26.7%, 0%, 0%)');
	equalColors('#330000', '#300', 'rgb(51, 0, 0)', 'rgb(20%, 0%, 0%)');
	equalColors('#220000', '#200', 'rgb(34, 0, 0)', 'rgb(13.3%, 0%, 0%)');
	equalColors('#110000', '#100', 'rgb(17, 0, 0)', 'rgb(6.7%, 0%, 0%)');
	equalColors('#000000', '#000', 'rgb(0, 0, 0)', 'rgb(0%, 0%, 0%)');
	equalColors('#ffffff', '#fff', 'rgb(255, 255, 255)', 'rgb(100%, 100%, 100%)');
	equalColors('#ffeeee', '#fee', 'rgb(255, 238, 238)', 'rgb(100%, 93.3%, 93.3%)');
	equalColors('#ffdddd', '#fdd', 'rgb(255, 221, 221)', 'rgb(100%, 86.7%, 86.7%)');
	equalColors('#ffcccc', '#fcc', 'rgb(255, 204, 204)', 'rgb(100%, 80%, 80%)');
	equalColors('#ffbbbb', '#fbb', 'rgb(255, 187, 187)', 'rgb(100%, 73.3%, 73.3%)');
	equalColors('#ffaaaa', '#faa', 'rgb(255, 170, 170)', 'rgb(100%, 66.7%, 66.7%)');
	equalColors('#ff9999', '#f99', 'rgb(255, 153, 153)', 'rgb(100%, 60%, 60%)');
	equalColors('#ff8888', '#f88', 'rgb(255, 136, 136)', 'rgb(100%, 53.3%, 53.3%)');
	equalColors('#ff7777', '#f77', 'rgb(255, 119, 119)', 'rgb(100%, 46.7%, 46.7%)');
	equalColors('#ff6666', '#f66', 'rgb(255, 102, 102)', 'rgb(100%, 40%, 40%)');
	equalColors('#ff5555', '#f55', 'rgb(255, 85, 85)', 'rgb(100%, 33.3%, 33.3%)');
	equalColors('#ff4444', '#f44', 'rgb(255, 68, 68)', 'rgb(100%, 26.7%, 26.7%)');
	equalColors('#ff3333', '#f33', 'rgb(255, 51, 51)', 'rgb(100%, 20%, 20%)');
	equalColors('#ff2222', '#f22', 'rgb(255, 34, 34)', 'rgb(100%, 13.3%, 13.3%)');
	equalColors('#ff1111', '#f11', 'rgb(255, 17, 17)', 'rgb(100%, 6.7%, 6.7%)');
	equalColors('#ff0000', '#f00', 'rgb(255, 0, 0)', 'rgb(100%, 0%, 0%)');
	equalColors('#00ff00', '#0f0', 'rgb(0, 255, 0)', 'rgb(0%, 100%, 0%)');
	equalColors('#00ee00', '#0e0', 'rgb(0, 238, 0)', 'rgb(0%, 93.3%, 0%)');
	equalColors('#00dd00', '#0d0', 'rgb(0, 221, 0)', 'rgb(0%, 86.7%, 0%)');
	equalColors('#00cc00', '#0c0', 'rgb(0, 204, 0)', 'rgb(0%, 80%, 0%)');
	equalColors('#00bb00', '#0b0', 'rgb(0, 187, 0)', 'rgb(0%, 73.3%, 0%)');
	equalColors('#00aa00', '#0a0', 'rgb(0, 170, 0)', 'rgb(0%, 66.7%, 0%)');
	equalColors('#009900', '#090', 'rgb(0, 153, 0)', 'rgb(0%, 60%, 0%)');
	equalColors('#008800', '#080', 'rgb(0, 136, 0)', 'rgb(0%, 53.3%, 0%)');
	equalColors('#007700', '#070', 'rgb(0, 119, 0)', 'rgb(0%, 46.7%, 0%)');
	equalColors('#006600', '#060', 'rgb(0, 102, 0)', 'rgb(0%, 40%, 0%)');
	equalColors('#005500', '#050', 'rgb(0, 85, 0)', 'rgb(0%, 33.3%, 0%)');
	equalColors('#004400', '#040', 'rgb(0, 68, 0)', 'rgb(0%, 26.7%, 0%)');
	equalColors('#003300', '#030', 'rgb(0, 51, 0)', 'rgb(0%, 20%, 0%)');
	equalColors('#002200', '#020', 'rgb(0, 34, 0)', 'rgb(0%, 13.3%, 0%)');
	equalColors('#001100', '#010', 'rgb(0, 17, 0)', 'rgb(0%, 6.7%, 0%)');
	equalColors('#000000', '#000', 'rgb(0, 0, 0)', 'rgb(0%, 0%, 0%)');
	equalColors('#ffffff', '#fff', 'rgb(255, 255, 255)', 'rgb(100%, 100%, 100%)');
	equalColors('#eeffee', '#efe', 'rgb(238, 255, 238)', 'rgb(93.3%, 100%, 93.3%)');
	equalColors('#ddffdd', '#dfd', 'rgb(221, 255, 221)', 'rgb(86.7%, 100%, 86.7%)');
	equalColors('#ccffcc', '#cfc', 'rgb(204, 255, 204)', 'rgb(80%, 100%, 80%)');
	equalColors('#bbffbb', '#bfb', 'rgb(187, 255, 187)', 'rgb(73.3%, 100%, 73.3%)');
	equalColors('#aaffaa', '#afa', 'rgb(170, 255, 170)', 'rgb(66.7%, 100%, 66.7%)');
	equalColors('#99ff99', '#9f9', 'rgb(153, 255, 153)', 'rgb(60%, 100%, 60%)');
	equalColors('#88ff88', '#8f8', 'rgb(136, 255, 136)', 'rgb(53.3%, 100%, 53.3%)');
	equalColors('#77ff77', '#7f7', 'rgb(119, 255, 119)', 'rgb(46.7%, 100%, 46.7%)');
	equalColors('#66ff66', '#6f6', 'rgb(102, 255, 102)', 'rgb(40%, 100%, 40%)');
	equalColors('#55ff55', '#5f5', 'rgb(85, 255, 85)', 'rgb(33.3%, 100%, 33.3%)');
	equalColors('#44ff44', '#4f4', 'rgb(68, 255, 68)', 'rgb(26.7%, 100%, 26.7%)');
	equalColors('#33ff33', '#3f3', 'rgb(51, 255, 51)', 'rgb(20%, 100%, 20%)');
	equalColors('#22ff22', '#2f2', 'rgb(34, 255, 34)', 'rgb(13.3%, 100%, 13.3%)');
	equalColors('#11ff11', '#1f1', 'rgb(17, 255, 17)', 'rgb(6.7%, 100%, 6.7%)');
	equalColors('#00ff00', '#0f0', 'rgb(0, 255, 0)', 'rgb(0%, 100%, 0%)');
	equalColors('#0000ff', '#00f', 'rgb(0, 0, 255)', 'rgb(0%, 0%, 100%)');
	equalColors('#0000ee', '#00e', 'rgb(0, 0, 238)', 'rgb(0%, 0%, 93.3%)');
	equalColors('#0000dd', '#00d', 'rgb(0, 0, 221)', 'rgb(0%, 0%, 86.7%)');
	equalColors('#0000cc', '#00c', 'rgb(0, 0, 204)', 'rgb(0%, 0%, 80%)');
	equalColors('#0000bb', '#00b', 'rgb(0, 0, 187)', 'rgb(0%, 0%, 73.3%)');
	equalColors('#0000aa', '#00a', 'rgb(0, 0, 170)', 'rgb(0%, 0%, 66.7%)');
	equalColors('#000099', '#009', 'rgb(0, 0, 153)', 'rgb(0%, 0%, 60%)');
	equalColors('#000088', '#008', 'rgb(0, 0, 136)', 'rgb(0%, 0%, 53.3%)');
	equalColors('#000077', '#007', 'rgb(0, 0, 119)', 'rgb(0%, 0%, 46.7%)');
	equalColors('#000066', '#006', 'rgb(0, 0, 102)', 'rgb(0%, 0%, 40%)');
	equalColors('#000055', '#005', 'rgb(0, 0, 85)', 'rgb(0%, 0%, 33.3%)');
	equalColors('#000044', '#004', 'rgb(0, 0, 68)', 'rgb(0%, 0%, 26.7%)');
	equalColors('#000033', '#003', 'rgb(0, 0, 51)', 'rgb(0%, 0%, 20%)');
	equalColors('#000022', '#002', 'rgb(0, 0, 34)', 'rgb(0%, 0%, 13.3%)');
	equalColors('#000011', '#001', 'rgb(0, 0, 17)', 'rgb(0%, 0%, 6.7%)');
	equalColors('#000000', '#000', 'rgb(0, 0, 0)', 'rgb(0%, 0%, 0%)');
	equalColors('#ffffff', '#fff', 'rgb(255, 255, 255)', 'rgb(100%, 100%, 100%)');
	equalColors('#eeeeff', '#eef', 'rgb(238, 238, 255)', 'rgb(93.3%, 93.3%, 100%)');
	equalColors('#ddddff', '#ddf', 'rgb(221, 221, 255)', 'rgb(86.7%, 86.7%, 100%)');
	equalColors('#ccccff', '#ccf', 'rgb(204, 204, 255)', 'rgb(80%, 80%, 100%)');
	equalColors('#bbbbff', '#bbf', 'rgb(187, 187, 255)', 'rgb(73.3%, 73.3%, 100%)');
	equalColors('#aaaaff', '#aaf', 'rgb(170, 170, 255)', 'rgb(66.7%, 66.7%, 100%)');
	equalColors('#9999ff', '#99f', 'rgb(153, 153, 255)', 'rgb(60%, 60%, 100%)');
	equalColors('#8888ff', '#88f', 'rgb(136, 136, 255)', 'rgb(53.3%, 53.3%, 100%)');
	equalColors('#7777ff', '#77f', 'rgb(119, 119, 255)', 'rgb(46.7%, 46.7%, 100%)');
	equalColors('#6666ff', '#66f', 'rgb(102, 102, 255)', 'rgb(40%, 40%, 100%)');
	equalColors('#5555ff', '#55f', 'rgb(85, 85, 255)', 'rgb(33.3%, 33.3%, 100%)');
	equalColors('#4444ff', '#44f', 'rgb(68, 68, 255)', 'rgb(26.7%, 26.7%, 100%)');
	equalColors('#3333ff', '#33f', 'rgb(51, 51, 255)', 'rgb(20%, 20%, 100%)');
	equalColors('#2222ff', '#22f', 'rgb(34, 34, 255)', 'rgb(13.3%, 13.3%, 100%)');
	equalColors('#1111ff', '#11f', 'rgb(17, 17, 255)', 'rgb(6.7%, 6.7%, 100%)');
	equalColors('#0000ff', '#00f', 'rgb(0, 0, 255)', 'rgb(0%, 0%, 100%)');
	equalColors('#ffff00', '#ff0', 'rgb(255, 255, 0)', 'rgb(100%, 100%, 0%)');
	equalColors('#eeee00', '#ee0', 'rgb(238, 238, 0)', 'rgb(93.3%, 93.3%, 0%)');
	equalColors('#dddd00', '#dd0', 'rgb(221, 221, 0)', 'rgb(86.7%, 86.7%, 0%)');
	equalColors('#cccc00', '#cc0', 'rgb(204, 204, 0)', 'rgb(80%, 80%, 0%)');
	equalColors('#bbbb00', '#bb0', 'rgb(187, 187, 0)', 'rgb(73.3%, 73.3%, 0%)');
	equalColors('#aaaa00', '#aa0', 'rgb(170, 170, 0)', 'rgb(66.7%, 66.7%, 0%)');
	equalColors('#999900', '#990', 'rgb(153, 153, 0)', 'rgb(60%, 60%, 0%)');
	equalColors('#888800', '#880', 'rgb(136, 136, 0)', 'rgb(53.3%, 53.3%, 0%)');
	equalColors('#777700', '#770', 'rgb(119, 119, 0)', 'rgb(46.7%, 46.7%, 0%)');
	equalColors('#666600', '#660', 'rgb(102, 102, 0)', 'rgb(40%, 40%, 0%)');
	equalColors('#555500', '#550', 'rgb(85, 85, 0)', 'rgb(33.3%, 33.3%, 0%)');
	equalColors('#444400', '#440', 'rgb(68, 68, 0)', 'rgb(26.7%, 26.7%, 0%)');
	equalColors('#333300', '#330', 'rgb(51, 51, 0)', 'rgb(20%, 20%, 0%)');
	equalColors('#222200', '#220', 'rgb(34, 34, 0)', 'rgb(13.3%, 13.3%, 0%)');
	equalColors('#111100', '#110', 'rgb(17, 17, 0)', 'rgb(6.7%, 6.7%, 0%)');
	equalColors('#000000', '#000', 'rgb(0, 0, 0)', 'rgb(0%, 0%, 0%)');
	equalColors('#ffffff', '#fff', 'rgb(255, 255, 255)', 'rgb(100%, 100%, 100%)');
	equalColors('#ffffee', '#ffe', 'rgb(255, 255, 238)', 'rgb(100%, 100%, 93.3%)');
	equalColors('#ffffdd', '#ffd', 'rgb(255, 255, 221)', 'rgb(100%, 100%, 86.7%)');
	equalColors('#ffffcc', '#ffc', 'rgb(255, 255, 204)', 'rgb(100%, 100%, 80%)');
	equalColors('#ffffbb', '#ffb', 'rgb(255, 255, 187)', 'rgb(100%, 100%, 73.3%)');
	equalColors('#ffffaa', '#ffa', 'rgb(255, 255, 170)', 'rgb(100%, 100%, 66.7%)');
	equalColors('#ffff99', '#ff9', 'rgb(255, 255, 153)', 'rgb(100%, 100%, 60%)');
	equalColors('#ffff88', '#ff8', 'rgb(255, 255, 136)', 'rgb(100%, 100%, 53.3%)');
	equalColors('#ffff77', '#ff7', 'rgb(255, 255, 119)', 'rgb(100%, 100%, 46.7%)');
	equalColors('#ffff66', '#ff6', 'rgb(255, 255, 102)', 'rgb(100%, 100%, 40%)');
	equalColors('#ffff55', '#ff5', 'rgb(255, 255, 85)', 'rgb(100%, 100%, 33.3%)');
	equalColors('#ffff44', '#ff4', 'rgb(255, 255, 68)', 'rgb(100%, 100%, 26.7%)');
	equalColors('#ffff33', '#ff3', 'rgb(255, 255, 51)', 'rgb(100%, 100%, 20%)');
	equalColors('#ffff22', '#ff2', 'rgb(255, 255, 34)', 'rgb(100%, 100%, 13.3%)');
	equalColors('#ffff11', '#ff1', 'rgb(255, 255, 17)', 'rgb(100%, 100%, 6.7%)');
	equalColors('#ffff00', '#ff0', 'rgb(255, 255, 0)', 'rgb(100%, 100%, 0%)');
	equalColors('#ff00ff', '#f0f', 'rgb(255, 0, 255)', 'rgb(100%, 0%, 100%)');
	equalColors('#ee00ee', '#e0e', 'rgb(238, 0, 238)', 'rgb(93.3%, 0%, 93.3%)');
	equalColors('#dd00dd', '#d0d', 'rgb(221, 0, 221)', 'rgb(86.7%, 0%, 86.7%)');
	equalColors('#cc00cc', '#c0c', 'rgb(204, 0, 204)', 'rgb(80%, 0%, 80%)');
	equalColors('#bb00bb', '#b0b', 'rgb(187, 0, 187)', 'rgb(73.3%, 0%, 73.3%)');
	equalColors('#aa00aa', '#a0a', 'rgb(170, 0, 170)', 'rgb(66.7%, 0%, 66.7%)');
	equalColors('#990099', '#909', 'rgb(153, 0, 153)', 'rgb(60%, 0%, 60%)');
	equalColors('#880088', '#808', 'rgb(136, 0, 136)', 'rgb(53.3%, 0%, 53.3%)');
	equalColors('#770077', '#707', 'rgb(119, 0, 119)', 'rgb(46.7%, 0%, 46.7%)');
	equalColors('#660066', '#606', 'rgb(102, 0, 102)', 'rgb(40%, 0%, 40%)');
	equalColors('#550055', '#505', 'rgb(85, 0, 85)', 'rgb(33.3%, 0%, 33.3%)');
	equalColors('#440044', '#404', 'rgb(68, 0, 68)', 'rgb(26.7%, 0%, 26.7%)');
	equalColors('#330033', '#303', 'rgb(51, 0, 51)', 'rgb(20%, 0%, 20%)');
	equalColors('#220022', '#202', 'rgb(34, 0, 34)', 'rgb(13.3%, 0%, 13.3%)');
	equalColors('#110011', '#101', 'rgb(17, 0, 17)', 'rgb(6.7%, 0%, 6.7%)');
	equalColors('#000000', '#000', 'rgb(0, 0, 0)', 'rgb(0%, 0%, 0%)');
	equalColors('#ffffff', '#fff', 'rgb(255, 255, 255)', 'rgb(100%, 100%, 100%)');
	equalColors('#ffeeff', '#fef', 'rgb(255, 238, 255)', 'rgb(100%, 93.3%, 100%)');
	equalColors('#ffddff', '#fdf', 'rgb(255, 221, 255)', 'rgb(100%, 86.7%, 100%)');
	equalColors('#ffccff', '#fcf', 'rgb(255, 204, 255)', 'rgb(100%, 80%, 100%)');
	equalColors('#ffbbff', '#fbf', 'rgb(255, 187, 255)', 'rgb(100%, 73.3%, 100%)');
	equalColors('#ffaaff', '#faf', 'rgb(255, 170, 255)', 'rgb(100%, 66.7%, 100%)');
	equalColors('#ff99ff', '#f9f', 'rgb(255, 153, 255)', 'rgb(100%, 60%, 100%)');
	equalColors('#ff88ff', '#f8f', 'rgb(255, 136, 255)', 'rgb(100%, 53.3%, 100%)');
	equalColors('#ff77ff', '#f7f', 'rgb(255, 119, 255)', 'rgb(100%, 46.7%, 100%)');
	equalColors('#ff66ff', '#f6f', 'rgb(255, 102, 255)', 'rgb(100%, 40%, 100%)');
	equalColors('#ff55ff', '#f5f', 'rgb(255, 85, 255)', 'rgb(100%, 33.3%, 100%)');
	equalColors('#ff44ff', '#f4f', 'rgb(255, 68, 255)', 'rgb(100%, 26.7%, 100%)');
	equalColors('#ff33ff', '#f3f', 'rgb(255, 51, 255)', 'rgb(100%, 20%, 100%)');
	equalColors('#ff22ff', '#f2f', 'rgb(255, 34, 255)', 'rgb(100%, 13.3%, 100%)');
	equalColors('#ff11ff', '#f1f', 'rgb(255, 17, 255)', 'rgb(100%, 6.7%, 100%)');
	equalColors('#ff00ff', '#f0f', 'rgb(255, 0, 255)', 'rgb(100%, 0%, 100%)');
	equalColors('#00ffff', '#0ff', 'rgb(0, 255, 255)', 'rgb(0%, 100%, 100%)');
	equalColors('#00eeee', '#0ee', 'rgb(0, 238, 238)', 'rgb(0%, 93.3%, 93.3%)');
	equalColors('#00dddd', '#0dd', 'rgb(0, 221, 221)', 'rgb(0%, 86.7%, 86.7%)');
	equalColors('#00cccc', '#0cc', 'rgb(0, 204, 204)', 'rgb(0%, 80%, 80%)');
	equalColors('#00bbbb', '#0bb', 'rgb(0, 187, 187)', 'rgb(0%, 73.3%, 73.3%)');
	equalColors('#00aaaa', '#0aa', 'rgb(0, 170, 170)', 'rgb(0%, 66.7%, 66.7%)');
	equalColors('#009999', '#099', 'rgb(0, 153, 153)', 'rgb(0%, 60%, 60%)');
	equalColors('#008888', '#088', 'rgb(0, 136, 136)', 'rgb(0%, 53.3%, 53.3%)');
	equalColors('#007777', '#077', 'rgb(0, 119, 119)', 'rgb(0%, 46.7%, 46.7%)');
	equalColors('#006666', '#066', 'rgb(0, 102, 102)', 'rgb(0%, 40%, 40%)');
	equalColors('#005555', '#055', 'rgb(0, 85, 85)', 'rgb(0%, 33.3%, 33.3%)');
	equalColors('#004444', '#044', 'rgb(0, 68, 68)', 'rgb(0%, 26.7%, 26.7%)');
	equalColors('#003333', '#033', 'rgb(0, 51, 51)', 'rgb(0%, 20%, 20%)');
	equalColors('#002222', '#022', 'rgb(0, 34, 34)', 'rgb(0%, 13.3%, 13.3%)');
	equalColors('#001111', '#011', 'rgb(0, 17, 17)', 'rgb(0%, 6.7%, 6.7%)');
	equalColors('#000000', '#000', 'rgb(0, 0, 0)', 'rgb(0%, 0%, 0%)');
	equalColors('#ffffff', '#fff', 'rgb(255, 255, 255)', 'rgb(100%, 100%, 100%)');
	equalColors('#eeffff', '#eff', 'rgb(238, 255, 255)', 'rgb(93.3%, 100%, 100%)');
	equalColors('#ddffff', '#dff', 'rgb(221, 255, 255)', 'rgb(86.7%, 100%, 100%)');
	equalColors('#ccffff', '#cff', 'rgb(204, 255, 255)', 'rgb(80%, 100%, 100%)');
	equalColors('#bbffff', '#bff', 'rgb(187, 255, 255)', 'rgb(73.3%, 100%, 100%)');
	equalColors('#aaffff', '#aff', 'rgb(170, 255, 255)', 'rgb(66.7%, 100%, 100%)');
	equalColors('#99ffff', '#9ff', 'rgb(153, 255, 255)', 'rgb(60%, 100%, 100%)');
	equalColors('#88ffff', '#8ff', 'rgb(136, 255, 255)', 'rgb(53.3%, 100%, 100%)');
	equalColors('#77ffff', '#7ff', 'rgb(119, 255, 255)', 'rgb(46.7%, 100%, 100%)');
	equalColors('#66ffff', '#6ff', 'rgb(102, 255, 255)', 'rgb(40%, 100%, 100%)');
	equalColors('#55ffff', '#5ff', 'rgb(85, 255, 255)', 'rgb(33.3%, 100%, 100%)');
	equalColors('#44ffff', '#4ff', 'rgb(68, 255, 255)', 'rgb(26.7%, 100%, 100%)');
	equalColors('#33ffff', '#3ff', 'rgb(51, 255, 255)', 'rgb(20%, 100%, 100%)');
	equalColors('#22ffff', '#2ff', 'rgb(34, 255, 255)', 'rgb(13.3%, 100%, 100%)');
	equalColors('#11ffff', '#1ff', 'rgb(17, 255, 255)', 'rgb(6.7%, 100%, 100%)');
	equalColors('#00ffff', '#0ff', 'rgb(0, 255, 255)', 'rgb(0%, 100%, 100%)');
	equalColors('#ff0000', '#f00', 'rgb(255, 0, 0)', 'rgb(100%, 0%, 0%)');
	equalColors('#ee1100', '#e10', 'rgb(238, 17, 0)', 'rgb(93.3%, 6.7%, 0%)');
	equalColors('#dd2200', '#d20', 'rgb(221, 34, 0)', 'rgb(86.7%, 13.3%, 0%)');
	equalColors('#cc3300', '#c30', 'rgb(204, 51, 0)', 'rgb(80%, 20%, 0%)');
	equalColors('#bb4400', '#b40', 'rgb(187, 68, 0)', 'rgb(73.3%, 26.7%, 0%)');
	equalColors('#aa5500', '#a50', 'rgb(170, 85, 0)', 'rgb(66.7%, 33.3%, 0%)');
	equalColors('#996600', '#960', 'rgb(153, 102, 0)', 'rgb(60%, 40%, 0%)');
	equalColors('#887700', '#870', 'rgb(136, 119, 0)', 'rgb(53.3%, 46.7%, 0%)');
	equalColors('#778800', '#780', 'rgb(119, 136, 0)', 'rgb(46.7%, 53.3%, 0%)');
	equalColors('#669900', '#690', 'rgb(102, 153, 0)', 'rgb(40%, 60%, 0%)');
	equalColors('#55aa00', '#5a0', 'rgb(85, 170, 0)', 'rgb(33.3%, 66.7%, 0%)');
	equalColors('#44bb00', '#4b0', 'rgb(68, 187, 0)', 'rgb(26.7%, 73.3%, 0%)');
	equalColors('#33cc00', '#3c0', 'rgb(51, 204, 0)', 'rgb(20%, 80%, 0%)');
	equalColors('#22dd00', '#2d0', 'rgb(34, 221, 0)', 'rgb(13.3%, 86.7%, 0%)');
	equalColors('#11ee00', '#1e0', 'rgb(17, 238, 0)', 'rgb(6.7%, 93.3%, 0%)');
	equalColors('#00ff00', '#0f0', 'rgb(0, 255, 0)', 'rgb(0%, 100%, 0%)');
	equalColors('#00ff00', '#0f0', 'rgb(0, 255, 0)', 'rgb(0%, 100%, 0%)');
	equalColors('#00ee11', '#0e1', 'rgb(0, 238, 17)', 'rgb(0%, 93.3%, 6.7%)');
	equalColors('#00dd22', '#0d2', 'rgb(0, 221, 34)', 'rgb(0%, 86.7%, 13.3%)');
	equalColors('#00cc33', '#0c3', 'rgb(0, 204, 51)', 'rgb(0%, 80%, 20%)');
	equalColors('#00bb44', '#0b4', 'rgb(0, 187, 68)', 'rgb(0%, 73.3%, 26.7%)');
	equalColors('#00aa55', '#0a5', 'rgb(0, 170, 85)', 'rgb(0%, 66.7%, 33.3%)');
	equalColors('#009966', '#096', 'rgb(0, 153, 102)', 'rgb(0%, 60%, 40%)');
	equalColors('#008877', '#087', 'rgb(0, 136, 119)', 'rgb(0%, 53.3%, 46.7%)');
	equalColors('#007788', '#078', 'rgb(0, 119, 136)', 'rgb(0%, 46.7%, 53.3%)');
	equalColors('#006699', '#069', 'rgb(0, 102, 153)', 'rgb(0%, 40%, 60%)');
	equalColors('#0055aa', '#05a', 'rgb(0, 85, 170)', 'rgb(0%, 33.3%, 66.7%)');
	equalColors('#0044bb', '#04b', 'rgb(0, 68, 187)', 'rgb(0%, 26.7%, 73.3%)');
	equalColors('#0033cc', '#03c', 'rgb(0, 51, 204)', 'rgb(0%, 20%, 80%)');
	equalColors('#0022dd', '#02d', 'rgb(0, 34, 221)', 'rgb(0%, 13.3%, 86.7%)');
	equalColors('#0011ee', '#01e', 'rgb(0, 17, 238)', 'rgb(0%, 6.7%, 93.3%)');
	equalColors('#0000ff', '#00f', 'rgb(0, 0, 255)', 'rgb(0%, 0%, 100%)');
	equalColors('#0000ff', '#00f', 'rgb(0, 0, 255)', 'rgb(0%, 0%, 100%)');
	equalColors('#1100ee', '#10e', 'rgb(17, 0, 238)', 'rgb(6.7%, 0%, 93.3%)');
	equalColors('#2200dd', '#20d', 'rgb(34, 0, 221)', 'rgb(13.3%, 0%, 86.7%)');
	equalColors('#3300cc', '#30c', 'rgb(51, 0, 204)', 'rgb(20%, 0%, 80%)');
	equalColors('#4400bb', '#40b', 'rgb(68, 0, 187)', 'rgb(26.7%, 0%, 73.3%)');
	equalColors('#5500aa', '#50a', 'rgb(85, 0, 170)', 'rgb(33.3%, 0%, 66.7%)');
	equalColors('#660099', '#609', 'rgb(102, 0, 153)', 'rgb(40%, 0%, 60%)');
	equalColors('#770088', '#708', 'rgb(119, 0, 136)', 'rgb(46.7%, 0%, 53.3%)');
	equalColors('#880077', '#807', 'rgb(136, 0, 119)', 'rgb(53.3%, 0%, 46.7%)');
	equalColors('#990066', '#906', 'rgb(153, 0, 102)', 'rgb(60%, 0%, 40%)');
	equalColors('#aa0055', '#a05', 'rgb(170, 0, 85)', 'rgb(66.7%, 0%, 33.3%)');
	equalColors('#bb0044', '#b04', 'rgb(187, 0, 68)', 'rgb(73.3%, 0%, 26.7%)');
	equalColors('#cc0033', '#c03', 'rgb(204, 0, 51)', 'rgb(80%, 0%, 20%)');
	equalColors('#dd0022', '#d02', 'rgb(221, 0, 34)', 'rgb(86.7%, 0%, 13.3%)');
	equalColors('#ee0011', '#e01', 'rgb(238, 0, 17)', 'rgb(93.3%, 0%, 6.7%)');
	equalColors('#ff0000', '#f00', 'rgb(255, 0, 0)', 'rgb(100%, 0%, 0%)');
	equalColors('#ff00ff', '#f0f', 'rgb(255, 0, 255)', 'rgb(100%, 0%, 100%)');
	equalColors('#ee11ff', '#e1f', 'rgb(238, 17, 255)', 'rgb(93.3%, 6.7%, 100%)');
	equalColors('#dd22ff', '#d2f', 'rgb(221, 34, 255)', 'rgb(86.7%, 13.3%, 100%)');
	equalColors('#cc33ff', '#c3f', 'rgb(204, 51, 255)', 'rgb(80%, 20%, 100%)');
	equalColors('#bb44ff', '#b4f', 'rgb(187, 68, 255)', 'rgb(73.3%, 26.7%, 100%)');
	equalColors('#aa55ff', '#a5f', 'rgb(170, 85, 255)', 'rgb(66.7%, 33.3%, 100%)');
	equalColors('#9966ff', '#96f', 'rgb(153, 102, 255)', 'rgb(60%, 40%, 100%)');
	equalColors('#8877ff', '#87f', 'rgb(136, 119, 255)', 'rgb(53.3%, 46.7%, 100%)');
	equalColors('#7788ff', '#78f', 'rgb(119, 136, 255)', 'rgb(46.7%, 53.3%, 100%)');
	equalColors('#6699ff', '#69f', 'rgb(102, 153, 255)', 'rgb(40%, 60%, 100%)');
	equalColors('#55aaff', '#5af', 'rgb(85, 170, 255)', 'rgb(33.3%, 66.7%, 100%)');
	equalColors('#44bbff', '#4bf', 'rgb(68, 187, 255)', 'rgb(26.7%, 73.3%, 100%)');
	equalColors('#33ccff', '#3cf', 'rgb(51, 204, 255)', 'rgb(20%, 80%, 100%)');
	equalColors('#22ddff', '#2df', 'rgb(34, 221, 255)', 'rgb(13.3%, 86.7%, 100%)');
	equalColors('#11eeff', '#1ef', 'rgb(17, 238, 255)', 'rgb(6.7%, 93.3%, 100%)');
	equalColors('#00ffff', '#0ff', 'rgb(0, 255, 255)', 'rgb(0%, 100%, 100%)');
	equalColors('#ffff00', '#ff0', 'rgb(255, 255, 0)', 'rgb(100%, 100%, 0%)');
	equalColors('#ffee11', '#fe1', 'rgb(255, 238, 17)', 'rgb(100%, 93.3%, 6.7%)');
	equalColors('#ffdd22', '#fd2', 'rgb(255, 221, 34)', 'rgb(100%, 86.7%, 13.3%)');
	equalColors('#ffcc33', '#fc3', 'rgb(255, 204, 51)', 'rgb(100%, 80%, 20%)');
	equalColors('#ffbb44', '#fb4', 'rgb(255, 187, 68)', 'rgb(100%, 73.3%, 26.7%)');
	equalColors('#ffaa55', '#fa5', 'rgb(255, 170, 85)', 'rgb(100%, 66.7%, 33.3%)');
	equalColors('#ff9966', '#f96', 'rgb(255, 153, 102)', 'rgb(100%, 60%, 40%)');
	equalColors('#ff8877', '#f87', 'rgb(255, 136, 119)', 'rgb(100%, 53.3%, 46.7%)');
	equalColors('#ff7788', '#f78', 'rgb(255, 119, 136)', 'rgb(100%, 46.7%, 53.3%)');
	equalColors('#ff6699', '#f69', 'rgb(255, 102, 153)', 'rgb(100%, 40%, 60%)');
	equalColors('#ff55aa', '#f5a', 'rgb(255, 85, 170)', 'rgb(100%, 33.3%, 66.7%)');
	equalColors('#ff44bb', '#f4b', 'rgb(255, 68, 187)', 'rgb(100%, 26.7%, 73.3%)');
	equalColors('#ff33cc', '#f3c', 'rgb(255, 51, 204)', 'rgb(100%, 20%, 80%)');
	equalColors('#ff22dd', '#f2d', 'rgb(255, 34, 221)', 'rgb(100%, 13.3%, 86.7%)');
	equalColors('#ff11ee', '#f1e', 'rgb(255, 17, 238)', 'rgb(100%, 6.7%, 93.3%)');
	equalColors('#ff00ff', '#f0f', 'rgb(255, 0, 255)', 'rgb(100%, 0%, 100%)');
	equalColors('#00ffff', '#0ff', 'rgb(0, 255, 255)', 'rgb(0%, 100%, 100%)');
	equalColors('#11ffee', '#1fe', 'rgb(17, 255, 238)', 'rgb(6.7%, 100%, 93.3%)');
	equalColors('#22ffdd', '#2fd', 'rgb(34, 255, 221)', 'rgb(13.3%, 100%, 86.7%)');
	equalColors('#33ffcc', '#3fc', 'rgb(51, 255, 204)', 'rgb(20%, 100%, 80%)');
	equalColors('#44ffbb', '#4fb', 'rgb(68, 255, 187)', 'rgb(26.7%, 100%, 73.3%)');
	equalColors('#55ffaa', '#5fa', 'rgb(85, 255, 170)', 'rgb(33.3%, 100%, 66.7%)');
	equalColors('#66ff99', '#6f9', 'rgb(102, 255, 153)', 'rgb(40%, 100%, 60%)');
	equalColors('#77ff88', '#7f8', 'rgb(119, 255, 136)', 'rgb(46.7%, 100%, 53.3%)');
	equalColors('#88ff77', '#8f7', 'rgb(136, 255, 119)', 'rgb(53.3%, 100%, 46.7%)');
	equalColors('#99ff66', '#9f6', 'rgb(153, 255, 102)', 'rgb(60%, 100%, 40%)');
	equalColors('#aaff55', '#af5', 'rgb(170, 255, 85)', 'rgb(66.7%, 100%, 33.3%)');
	equalColors('#bbff44', '#bf4', 'rgb(187, 255, 68)', 'rgb(73.3%, 100%, 26.7%)');
	equalColors('#ccff33', '#cf3', 'rgb(204, 255, 51)', 'rgb(80%, 100%, 20%)');
	equalColors('#ddff22', '#df2', 'rgb(221, 255, 34)', 'rgb(86.7%, 100%, 13.3%)');
	equalColors('#eeff11', '#ef1', 'rgb(238, 255, 17)', 'rgb(93.3%, 100%, 6.7%)');
	equalColors('#ffff00', '#ff0', 'rgb(255, 255, 0)', 'rgb(100%, 100%, 0%)');
});