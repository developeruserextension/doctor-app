import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.css']
})
export class JoinFormComponent implements OnInit {
  constructor() { }

  speciality=[
    {name:'Acupuncturist',value:'Acupuncturist'},
    {name:'Allergist',value:'Allergist'},
    {name:'Anesthesiologist',value:'Anesthesiologist'},
    {name:'Audiologist',value:'Audiologist'},
    { name:'Bariatric Physician',value:'Bariatric Physician'},
    { name:'Cardiac Electrophysiologist',value:'Cardiac Electrophysiologist'},
    {name:'Cardiologist',value:'Cardiologist'},
    { name:'Cardiothoracic Surgeon',value:'Cardiothoracic Surgeon'},
    { name:'Chiropractor',value:'Chiropractor'},
    { name:'Colorectal Surgeon',value:'Colorectal Surgeon'},
    { name:'Dentist',value:'Dentist'},
    { name:'Dermatologist',value:'Dermatologist'},
    { name:'Dietitian',value:'Dietitian'},
    { name:'Ear, Nose & Throat Doctor',value:'Ear, Nose & Throat Doctor'},
    { name:'Emergency Medicine Physician',value:'Emergency Medicine Physician'},
    { name:'Endocrinologist',value:'Endocrinologist'},
    { name:'Endodontist',value:'Endodontist'},
    { name:'Family Physician',value:'Family Physician'},
    { name:'Gastroenterologist',value:'Gastroenterologist'},
    { name:'Geneticist',value:'Geneticist'},
    { name:'Hand Surgeon',value:'Hand Surgeon'},
    { name:'Hematologist',value:'Hematologist'},
    { name:'Infectious Disease Specialist',value:'Infectious Disease Specialist'},
    { name:'Integrative Health Medicine Specialist',value:'Integrative Health Medicine Specialist'},
    { name:'Internist',value:'Internist'},
    { name:'Microbiologist',value:'Microbiologist'},
    { name:'Midwife',value:'Midwife'},
    { name:'Naturopathic Doctor',value:'Naturopathic Doctor'},
    { name:'Nephrologist',value:'Nephrologist'},
    { name:'Neurologist',value:'Neurologist'},
    { name:'Neuropsychiatrist',value:'Neuropsychiatrist'},
    { name:'Neurosurgeon',value:'Neurosurgeon'},
    { name:'Nurse Practitioner',value:'Nurse Practitioner'},
    { name:'Nutritionist',value:'Nutritionist'},
    { name:'OB-GYN',value:'OB-GYN'},
    { name:'Oncologist',value:'Oncologist'},
    { name:'Ophthalmologist',value:'Ophthalmologist'},
    { name:'Optometrist',value:'Optometrist'},
    { name:'Oral Surgeon',value:'Oral Surgeon'},
    { name:'Orthodontist',value:'Orthodontist'},
    { name:'Orthopedic Surgeon',value:'Orthopedic Surgeon'},
    { name:'Pain Management Specialist',value:'Pain Management Specialist'},
    { name:'Pathologist',value:'Pathologist'},
    { name:'Pediatric Dentist',value:'Pediatric Dentist'},
    {name:'Pediatrician',value:'Pediatrician'},
    { name:'Periodontist',value:'Periodontist'},
    { name:'Physiatrist',value:'Physiatrist'},
    { name:'Physical Therapist',value:'Physical Therapist'},
    { name:'Physician Assistant',value:'Physician Assistant'},
    { name:'Plastic Surgeon',value:'Plastic Surgeon'},
    { name:'Podiatrist',value:'Podiatrist'},
    {name:'Preventive Medicine Specialist',value:'Preventive Medicine Specialist'},
    { name:'Primary Care Doctor',value:'Primary Care Doctor'},
    { name:'Prosthodontist',value:'Prosthodontist'},
    { name:'Psychiatrist',value:'Psychiatrist'},
    { name:'Psychologist',value:'Psychologist'},
    { name:'Psychosomatic Medicine Specialist',value:'Psychosomatic Medicine Specialist'},
    { name:'Psychotherapist',value:'Psychotherapist'},
    { name:'Pulmonologist',value:'Pulmonologist'},
    { name:'Radiation Oncologist',value:'Radiation Oncologist'},
    { name:'Radiologist',value:'Radiologist'},
    { name:'Reproductive Endocrinologist',value:'Reproductive Endocrinologist'},
    { name:'Rheumatologist',value:'Rheumatologist'},
    { name:'Sleep Medicine Specialist',value:'Sleep Medicine Specialist'},
    { name:'Sports Medicine Specialist',value:'Sports Medicine Specialist'},
    { name:'Surgeon',value:'Surgeon'},
    { name:'Surgical Oncologist',value:'Surgical Oncologist'},
    { name:'Travel Medicine Specialist',value:'Travel Medicine Specialist'},
    { name:'Urgent Care Specialist',value:'Urgent Care Specialist'},
    { name:'Urological Surgeon',value:'Urological Surgeon'},
    { name:'Urologist',value:'Urologist'},
    { name:'Vascular Surgeon',value:'Vascular Surgeon'}
  ]

  public scroll(element: any) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit() {
  }


}
