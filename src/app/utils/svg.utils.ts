import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('helloworld', ds.bypassSecurityTrustResourceUrl('assets/img/icons/add.svg'));
};
