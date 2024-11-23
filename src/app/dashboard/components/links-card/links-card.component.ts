import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-links-card',
  standalone: true,
  imports: [],
  templateUrl: './links-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksCardComponent {


  ngAfterViewInit() {
    document.querySelectorAll(".custom-select").forEach((dropdown) => {
      const trigger = dropdown.querySelector(".custom-select-trigger")!;
      const options = dropdown.querySelectorAll(".custom-option")!;

      // Toggle el dropdown
      trigger.addEventListener("click", () => {
        dropdown.classList.toggle("active");
      });

      // Selección de opciones
      options.forEach((option) => {
        option.addEventListener("click", () => {
          const selectedValue = option.getAttribute("data-value");
          const selectedText = option.innerHTML;

          // Actualiza el trigger con la opción seleccionada
          trigger.innerHTML = selectedText + '<span class="custom-select-arrow"></span>';

          // Cierra el dropdown
          dropdown.classList.remove("active");
        });
      });
    });

// Cerrar dropdown al hacer clic fuera
    window.addEventListener("click", (e) => {
      const target = e.target as HTMLElement; // Aseguramos que target es un HTMLElement
      if (target.classList.contains("my-class")) {
        console.log("Clicked on an element with class 'my-class'");
      }
    });


  }
  removeLink() {

  }
}
