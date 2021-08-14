import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  user: User | null = null;
  apiUrl = `http://localhost:3000/`;

  navigation: { label: string, href: string, role: number }[] = [
    { label: '📊 Irányítópult', href: '/dashboard', role: 1 },
    { label: '🔨 Mesterek', href: '/users', role: 3 },
    { label: '🗺️ Térkép', href: '/map', role: 1 },
    { label: '⌚ Ráérések', href: '/working-hours', role: 1 }
  ];

  userColumns: { key: string | string[], label: string }[] = [
    { key: '_id', label: 'ID' },
    { key: 'first_name', label: 'Utónév' },
    { key: 'last_name', label: 'Vezetéknév' },
    { key: 'skill', label: 'Szakterület' },
    { key: 'phone_number', label: 'Telefonszám' },
    { key: 'counties', label: 'Megye' },
    { key: 'cities', label: 'Település' }
  ];

  countyColumns: { key: string | string[], label: string }[] = [
    { key: '_id', label: 'ID' },
    { key: 'name', label: 'Megye' },
    { key: 'cities', label: 'Városok' }
  ];

  cityColumns: { key: string | string[], label: string }[] = [
    { key: '_id', label: 'ID' },
    { key: 'name', label: 'Város' },
    { key: 'county', label: 'Megye' }
  ];

  skillColumns: { key: string | string[], label: string }[] = [
    { key: '_id', label: 'ID' },
    { key: 'name', label: 'Szaktudás' }
  ];

  constructor() { }
}
