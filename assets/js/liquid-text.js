let globalMaterial = new Blotter.LiquidDistortMaterial();

let globalBlotter = new Blotter(globalMaterial, {
    texts: [],
    autostart: false,
    autobuild: false
});

class LiquidText {
    constructor(element, volatility, speed) {
        this.element = element;
        this.text = element.text;
        this.fontSize = parseInt($(element).css('font-size'));
        this.fontStack = $(element).css('font-family');
        this.fontWeight = $(element).css('font-weight');
        this.fontColor = $(element).css('color');
        this.material = globalMaterial;
        this.hoverDuration = 0.35;
        this.hoverEase = Linear.easeIn;
        this.liquidVolatility = volatility ? volatility : 0.025;
        this.liquidSpeed = speed ? speed : 1;
        this.scope = null;
        this.blotter = globalBlotter;
        this.blotterText = null;
        this.onResize = this.onResize.bind(this);

        window.addEventListener('resize', this.onResize);

        this.initialize();
    }
    initialize() {
        let blotter = this.blotter;
        let text = new Blotter.Text(this.text, {
            family: this.fontStack,
            size: this.fontSize,
            fill: this.fontColor,
            weight: this.fontWeight,
            paddingLeft: 50,
            paddingRight: 100
        });
        this.blotterText = text;
        this.material.uniforms.uVolatility.value = 0;
        this.material.uniforms.uSeed.value = 0.1;
        blotter.addText(text);

        blotter.needsUpdate = true;

        var scope = blotter.forText(text);

        this.scope = scope;

        scope.appendTo(this.element);

        this.element.onmouseenter = (event) => {
            this.scope.material.needsUpdate = true;
            gsap.fromTo(this.scope.material.uniforms.uVolatility, this.hoverDuration, {
                value: 0,
                ease: this.hoverEase
            }, {
                value: this.liquidVolatility,
                ease: this.hoverEase,
            });
        }

        this.element.onmouseleave = (event) => {
            gsap.fromTo(this.scope.material.uniforms.uVolatility, this.hoverDuration, {
                value: this.scope.material.uniforms.uVolatility.value,
                ease: this.hoverEase
            }, {
                value: 0,
                ease: this.hoverEase,
                onComplete: () => {
                    this.scope.material.needsUpdate = true;
                }
            });
        }
    }
    stop() {
        this.blotter.stop();
    }
    start() {
        this.blotter.start();
    }
    onResize() {
        let text = this.blotterText;
        let time = 100;
        let timer;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            text.properties.size = parseInt($(this.element).css('font-size'));
            text.needsUpdate = true;
        }, time, event);
    }
}