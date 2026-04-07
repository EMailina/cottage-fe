import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only initialize map in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Coordinates from Google Maps: Lúčna 113/31, 013 13 Rajecké Teplice
    const latitude = 49.1277690;
    const longitude = 18.6871302;

    const map = new maplibregl.Map({
      container: 'contact-map',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [longitude, latitude],
      zoom: 17
    });

    // Disable all map interactions
    map.scrollZoom.disable();
    map.boxZoom.disable();
    map.dragRotate.disable();
    map.dragPan.disable();
    map.touchZoomRotate.disable();
    map.doubleClickZoom.disable();
    map.keyboard.disable();

    // Wait for map to fully load
    map.on('load', () => {
      // Create custom GPS location marker
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-marker';
      markerEl.innerHTML = `
        <svg width="50" height="60" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
          <!-- Drop shadow effect -->
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
            </filter>
          </defs>
          <!-- Pin shape -->
          <path d="M 25 0 C 40.464 0 50 9.536 50 25 C 50 40 25 60 25 60 C 25 60 0 40 0 25 C 0 9.536 9.536 0 25 0 Z" 
                fill="#8B7355" filter="url(#shadow)"/>
          <!-- Inner circle -->
          <circle cx="25" cy="25" r="10" fill="white"/>
          <!-- Center dot -->
          <circle cx="25" cy="25" r="4" fill="#8B7355"/>
        </svg>
      `;
      markerEl.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50% - 7px));
        z-index: 999;
        pointer-events: none;
        cursor: pointer;
      `;

      const mapContainer = document.getElementById('contact-map');
      if (mapContainer) {
        mapContainer.style.position = 'relative';
        mapContainer.appendChild(markerEl);
      }

      // Create popup
      const popup = new maplibregl.Popup({ 
        offset: 30,
        closeButton: false,
        closeOnClick: false
      })
        .setHTML('<div style="font-weight: bold; color: #333; text-align: center;">Lúčna 113/31<br>013 13 Rajecké Teplice</div>')
        .setLngLat([longitude, latitude])
        .addTo(map);
    });
  }
}