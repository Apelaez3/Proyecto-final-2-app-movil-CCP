import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class RegisterPage  {

  nombre: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private registerService: RegisterService, private router: Router, private alertCtrl: AlertController) {}

  async registrarse() {
    if (!this.nombre || !this.email || !this.telefono || !this.direccion || !this.password || !this.confirmPassword) {
      this.mostrarAlerta('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.mostrarAlerta('Error', 'Las contraseñas no coinciden.');
      return;
    }

    this.registerService.registerClient(this.nombre, this.email, this.telefono, this.direccion, this.password).subscribe({
      next: async () => {
        await this.mostrarAlerta('Éxito', 'Se ha registrado con exitoso a la app.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.mostrarAlerta('Error', 'Hubo un problema en el registro. Inténtalo nuevamente.');
        console.error(err);
      }
    });
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['Cerrar']
    });
    await alert.present();
  }

  
}
