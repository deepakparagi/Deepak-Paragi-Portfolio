import os
from PIL import Image

assets_dir = 'src/assets'

for filename in os.listdir(assets_dir):
    if filename.endswith('.png'):
        filepath = os.path.join(assets_dir, filename)
        img = Image.open(filepath)
        webp_filename = os.path.splitext(filename)[0] + '.webp'
        webp_filepath = os.path.join(assets_dir, webp_filename)
        
        print(f'Converting {filename} to {webp_filename}...')
        img.save(webp_filepath, 'webp')
        
print('Conversion complete!')
