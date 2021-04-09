import Head from 'next/head';
import Link from 'next/link';

import { Header } from '../components/Header';
import { Title } from '../components/Title';

import styles from "../styles/pages/Schedules.module.css";

export default function Schedules() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Horários | TADS</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <Title text="Horários" icon="schedules"/>
          <table className={`${styles.table} animate-up delay-2`}>
            <thead>
              <tr>
                <th>Dia</th>
                <th>Hora</th>
                <th>Disciplina</th>
                <th>Reunião</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda-feira</td>
                <td>08:00 - 08:45</td>
                <td>Laboratório de Computação II</td>
                <td><Link href="https://meet.google.com/vsd-vcaq-zub"><a>Link da Reunião</a></Link></td>
              </tr>
              <tr>
                <td>Segunda-feira</td>
                <td>09:00 - 09:45</td>
                <td>Linguagem de Programação Estruturada </td>
                <td><Link href="https://meet.google.com/qcq-uuyx-qay"><a>Link da Reunião</a></Link></td>
              </tr>
              <tr>
                <td>Terça-feira</td>
                <td>09:00 - 09:45</td>
                <td>Fundamentos de Banco de Dados</td>
                <td><Link href="https://meet.google.com/shn-dxqy-fgb"><a>Link da Reunião</a></Link></td>
              </tr>
              <tr>
                <td>Quarta-feira</td>
                <td>08:00 - 08:45</td>
                <td>Matemática Discreta</td>
                <td><Link href="https://meet.google.com/vxg-snnq-ewx"><a>Link da Reunião</a></Link></td>
              </tr>
              <tr>
                <td>Quinta-feira</td>
                <td>09:00 - 09:45</td>
                <td>Fundamentos de Orientação a Objetos</td>
                <td><Link href="https://meet.google.com/med-okoe-uhb"><a>Link da Reunião</a></Link></td>
              </tr>
              <tr>
                <td>Sexta-feira</td>
                <td>08:30 - 09:15</td>
                <td>Arquitetura e Organização de Computadores</td>
                <td><Link href="https://meet.google.com/bto-urbp-gbg"><a>Link da Reunião</a></Link></td>
              </tr>
              <tr>
                <td>Sexta-feira</td>
                <td>11:00 - 11:45</td>
                <td>Engenharia de Software</td>
                <td><Link href="https://meet.google.com/dnj-evja-tss"><a>Link da Reunião</a></Link></td>
              </tr>
            </tbody>
          </table>
        
      </div>
    </div>
  )
}
