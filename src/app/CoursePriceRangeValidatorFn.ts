import{ AbstractControl, ValidationErrors} from "@angular/forms";

export function CoursePriceRangeValidator(controlElement : AbstractControl): ValidationErrors | null{
if(controlElement.value !==undefined && controlElement.value>8000 && controlElement.value<=20000)
{
return null;
}
return {'invalidPrice':'invalid course price'}

}