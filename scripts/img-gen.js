import { LazyCanvas, Exporter, Font, MorphLayer, Gradient, TextLayer, ImageLayer, LineLayer } from '@nmmty/lazycanvas';

for (const text of ['Contact', 'About Me', 'Statistics']) {
    const canvas = new LazyCanvas()
        .create(622, 96);

    canvas.manager.fonts.add(
        new Font()
            .setFamily('OlgaCTT')
            .setWeight(400)
            .setPath('./assets/fonts/OlgaCTT.ttf')
    );

    canvas.manager.layers.add(
        new MorphLayer()
            .setPosition(311, 48)
            .setSize(620, 94, 20)
            .setColor("#f7f7f7"),
        new ImageLayer()
            .setPosition(68, 48)
            .setSize(260, 260)
            .setSrc('./assets/icon.png')
            .setGlobalCompositeOperation('source-atop'),
        new TextLayer()
            .setPosition(311, 48)
            .setText(text)
            .setFont('OlgaCTT', 60, 400)
            .setBaseline('middle')
            .setColor('#000')
            .setAlign('center'),
        new LineLayer()
            .setPosition(190, 73)
            .setEndPosition(432, 73)
            .setStroke(2)
            .setColor(
                new Gradient()
                    .setType('linear')
                    .addPoints(
                        { x: 190, y: 73 },
                        { x: 432, y: 73 }
                    )
                    .addStops(
                        { offset: 0, color: 'rgba(0, 0, 0, 0)' },
                        { offset: 0.2, color: 'rgba(0, 0, 0, 1)' },
                        { offset: 0.5, color: 'rgba(0, 0, 0, 1)' },
                        { offset: 0.8, color: 'rgba(0, 0, 0, 1)' },
                        { offset: 1, color: 'rgba(0, 0, 0, 0)' }
                    )
            ),
        new MorphLayer()
            .setPosition(311, 48)
            .setSize(620, 94, 20)
            .setColor(
                new Gradient()
                    .setType('radial')
                    .addPoints(
                        { x: 311, y: 48, r: 150 },
                        { x: 311, y: 48, r: 300 }
                    )
                    .addStops(
                        { offset: 0, color: '#ff8a8a' },
                        { offset: 1, color: '#d56d84' }
                    )
            )
            .setFilled(false)
            .setStroke(2, 'square', 'miter', [10, 10, 10])
    );

    new Exporter(canvas).export('png', { name: text, saveAsFile: true })
}