var maxIdDoc = db.services.find().sort({_id: -1}).limit(1).toArray()[0];
var newId = maxIdDoc ? maxIdDoc._id + 1 : 1;
db.services.deleteOne({ name: "{{ name }}",  clientId: "{{ client_id }}", clientSecret: "{{ client_secret }}" });
db.services.insertOne({"_id": NumberLong(newId),"jwks":"file:///data/cas/keystore.jwks","jwksCacheDuration":0,"tokenEndpointAuthenticationMethod":"client_secret_basic","signIdToken":true,"encryptIdToken":false,"idTokenEncryptionAlg":"A256GCMKW","idTokenEncryptionEncoding":"A256GCM","applicationType":"web","subjectType":"public","dynamicallyRegistered":false,"scopes":["user_defined","Offline Access","openid","email","profile","custom"],"clientSecret":"{{ client_secret }}","clientId":"{{client_id}}","bypassApprovalPrompt":true,"generateRefreshToken":true,"renewRefreshToken":false,"jwtAccessToken":true,"supportedGrantTypes":[],"supportedResponseTypes":[],"serviceId":"{{ url }}","name":"{{ name }}","description":"{{ desc }}","expirationPolicy":{"deleteWhenExpired":false,"notifyWhenDeleted":false,"notifyWhenExpired":false,"_class":"org.apereo.cas.services.DefaultRegisteredServiceExpirationPolicy"},"acceptableUsagePolicy":{"enabled":true,"_class":"org.apereo.cas.services.DefaultRegisteredServiceAcceptableUsagePolicy"},"proxyPolicy":{"_class":"org.apereo.cas.services.RefuseRegisteredServiceProxyPolicy"},"proxyTicketExpirationPolicy":{"numberOfUses":0,"_class":"org.apereo.cas.services.DefaultRegisteredServiceProxyTicketExpirationPolicy"},"serviceTicketExpirationPolicy":{"numberOfUses":0,"_class":"org.apereo.cas.services.DefaultRegisteredServiceServiceTicketExpirationPolicy"},"webflowInterruptPolicy":{"enabled":true,"forceExecution":"UNDEFINED","_class":"org.apereo.cas.services.DefaultRegisteredServiceWebflowInterruptPolicy"},"evaluationOrder":0,"usernameAttributeProvider":{"canonicalizationMode":"NONE","encryptUsername":false,"_class":"org.apereo.cas.services.DefaultRegisteredServiceUsernameProvider"},"logoutType":"BACK_CHANNEL","environments":[],"attributeReleasePolicy":{"allowedAttributes":[],"principalAttributesRepository":{"mergingStrategy":"MULTIVALUED","attributeRepositoryIds":[],"ignoreResolvedAttributes":false,"_class":"org.apereo.cas.authentication.principal.DefaultPrincipalAttributesRepository"},"consentPolicy":{"status":"UNDEFINED","order":0,"_class":"org.apereo.cas.services.consent.DefaultRegisteredServiceConsentPolicy"},"authorizedToReleaseCredentialPassword":false,"authorizedToReleaseProxyGrantingTicket":false,"excludeDefaultAttributes":false,"authorizedToReleaseAuthenticationAttributes":true,"order":0,"_class":"org.apereo.cas.services.ReturnAllowedAttributeReleasePolicy"},"multifactorPolicy":{"multifactorAuthenticationProviders":[],"failureMode":"UNDEFINED","bypassEnabled":false,"forceExecution":false,"bypassTrustedDeviceEnabled":false,"_class":"org.apereo.cas.services.DefaultRegisteredServiceMultifactorPolicy"},"matchingStrategy":{"_class":"org.apereo.cas.services.FullRegexRegisteredServiceMatchingStrategy"},"accessStrategy":{"order":0,"enabled":true,"ssoEnabled":true,"delegatedAuthenticationPolicy":{"allowedProviders":[],"permitUndefined":true,"exclusive":false,"_class":"org.apereo.cas.services.DefaultRegisteredServiceDelegatedAuthenticationPolicy"},"requireAllAttributes":true,"requiredAttributes":{},"rejectedAttributes":{},"caseInsensitive":false,"_class":"org.apereo.cas.services.DefaultRegisteredServiceAccessStrategy"},"authenticationPolicy":{"requiredAuthenticationHandlers":[],"excludedAuthenticationHandlers":[],"criteria":{"tryAll":false,"_class":"org.apereo.cas.services.AnyAuthenticationHandlerRegisteredServiceAuthenticationPolicyCriteria"},"_class":"org.apereo.cas.services.DefaultRegisteredServiceAuthenticationPolicy"},"properties":{},"contacts":[],"_class":"org.apereo.cas.services.OidcRegisteredService"}
      );
